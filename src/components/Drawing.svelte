<script lang="ts">
	import type Konva from 'konva';
	import type { KonvaMouseEvent } from 'svelte-konva';
	import Stage  from '~/components/ResponsiveStage.svelte';
	import Layer from 'svelte-konva';
	import Line from 'svelte-konva';
	import type { LineCap, LineJoin } from 'konva/lib/Shape';
    import type { SvelteComponent } from "svelte";
    export class ComponentName extends SvelteComponent<{propertyName: string;}> {}

	let stage: Konva.Stage;
	import { onMount } from 'svelte';

	const DRAW_TIMEOUT_MS = 5;

	enum Tools {
		Pen,
		Eraser
	}

	let strokes: Array<Konva.LineConfig> = []; // This array stores all pen and eraser strokes that have been made
	let selectedTool = Tools.Pen;
	let strokeWidth = 10;
	let isDrawing = false; // Flag is active if the user is currently drawing/erasing
	let drawTimeout: NodeJS.Timeout | null; // Timeout used to limit the pointermove event to not save too much data for the stroke points
	let drawTimeoutRunning = false; // Used to indicate wether the timeout is currently in progress or not

	function getRealPointerPos(pos: Konva.Vector2d, stage: Konva.Stage) {
	const realPos = {
		x: 0,
		y: 0
	};
	const stageScale = stage.scaleX(); // Only care about x scale as y is always the same
	realPos.x = pos.x / stageScale - stage.x() / stageScale;
	realPos.y = pos.y / stageScale - stage.y() / stageScale;
	return realPos;
}
	function startDraw() {
		const pointerPos = getRealPointerPos(stage.getPointerPosition()!, stage);

		const lineConfig = {
			points: [pointerPos.x, pointerPos.y, pointerPos.x, pointerPos.y], // Initial position is added twice to make a single click visible as dot (otherwise a single click would result in an invisible dot)
			stroke: 'yellow',
			strokeWidth,
			lineCap: 'round' as LineCap,
			lineJoin: 'round' as LineJoin,
			tension: 0.5,
			draggable: false,
			globalCompositeOperation: 'source-over' as GlobalCompositeOperation
		};

		if (selectedTool === Tools.Eraser) {
			lineConfig.globalCompositeOperation = 'destination-out';
		}

		strokes.push(lineConfig);

		strokes = strokes;
		isDrawing = true;
	}

	function draw() {
		if (!isDrawing) {
			return;
		}

		if (drawTimeout) {
			if (drawTimeoutRunning) {
				return;
			}

			const pointerPos = getRealPointerPos(stage.getPointerPosition()!, stage);

			const points = strokes[strokes.length - 1].points!;

			(points as Array<number>).push(pointerPos.x);
			(points as Array<number>).push(pointerPos.y);

			strokes = strokes;
		}

		drawTimeoutRunning = true;
		drawTimeout = setTimeout(() => {
			drawTimeoutRunning = false;
		}, DRAW_TIMEOUT_MS);
	}

	function stopDraw() {
		if (!isDrawing) {
			return;
		}

		isDrawing = false;
		drawTimeout = null;
		drawTimeoutRunning = false;
	}

	function drawMouseOut(e: KonvaMouseEvent) {
		const konvaEvent = e.detail;

		// Check if event target is stage (eg. user clicked on empty part of the stage and not any shape)
		if (konvaEvent.target.getType() !== 'Stage') {
			return;
		}

		stopDraw();
	}

</script>

<Stage
	on:pointerdown={startDraw}
	on:pointermove={draw}
	on:pointerup={stopDraw}
	on:mouseout={drawMouseOut}
	bind:handle={stage}
>
	<Layer>
		{#each strokes as stroke}
			<Line config={stroke} />
		{/each}
	</Layer>
</Stage>
