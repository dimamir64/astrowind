<script lang="ts">
	import type Konva from 'konva';
	import Stage from 'svelte-konva';
	import { onMount } from 'svelte';
    import type { SvelteComponent } from "svelte";
    export class ComponentName extends SvelteComponent<{propertyName: string;}> {}
	export let handle: null | Konva.Stage = null;

	let container: HTMLDivElement;

	const STAGE_BASE_WIDTH = 1000; // Base width of the stage used to calculate the required scale at any container width to make sure that the examples are all appropriately scaled on each window size

	let config = {
		width: STAGE_BASE_WIDTH,
		height: 1000,
		scaleX: 1,
		scaleY: 1
	};

	function updateStageSize() {
		if (!container) {
			return;
		}

		// Subtract 10 px because of 5px border of div container
		config.width = container.offsetWidth - 10;
		config.height = container.offsetHeight - 10;
		let scale = config.width / STAGE_BASE_WIDTH;
		config.scaleX = scale;
		config.scaleY = scale;
	}

	onMount(() => {
		window.addEventListener('resize', updateStageSize);

		updateStageSize();
	});
</script>

<div bind:this={container} style="max-height: 70vh;">
	<Stage
		{config}
		style="border: solid grey 5px;"
		bind:handle
		on:pointerdblclick
		on:pointerdown
		on:pointerup
		on:pointermove
		on:mouseout
	>
		<slot />
	</Stage>
</div>