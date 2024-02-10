<script setup lang="ts">
import { createApp, ref, computed, watchEffect } from 'vue';
import { useCounter } from '@vueuse/shared'
import { formatDate, useRefHistory } from '@vueuse/core'

function format(ts: number) {
    return formatDate(new Date(ts), 'YYYY-MM-DD HH:mm:ss')
}

const { count, inc, dec } = useCounter()
const { history, undo, redo, canUndo, canRedo } = useRefHistory(count, { capacity: 10 })

//import {  ref  } from 'vue';
import { useDraggable, useTitle } from '@vueuse/core';
import { vElementSize } from '@vueuse/components';
//import { Form } from 'vue-formio';;

function onResize({ width, height }: { width: number, height: number }) {
    console.log(width, height)
}
const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
    initialValue: { x: 140, y: 240 },
})
const x1 = 0, y1 = 0;
const title = useTitle(null)

</script>

<template>
    <input type="number" :value="c" @change="setC"> Celsius =
    <input type="number" :value="f" @change="setF"> Fahrenheit
    <div ref="el" :style="style" style="position: fixed">
        Drag me! I am at {{ parseInt(x) }}, {{ parseInt(y) }}
    </div>
    <!-- with options -->
    <textarea v-element-size="[onResize, { width: 100, height: 100 }, { box: 'content-box' }]" />
    <note>Title</note>
    <input v-model="title" type="text">
    <div class="counter-message">
        <slot />
    </div>
    <div>Count: {{ count }}</div>
    <button @click="inc()">
        Increment
    </button>
    <button @click="dec()">
        Decrement
    </button>
    <span class="ml-2">/</span>
    <button :disabled="!canUndo" @click="undo()">
        Undo
    </button>
    <button :disabled="!canRedo" @click="redo()">
        Redo
    </button>
    <br>
    <br>
    <note>History (limited to 10 records for demo)</note>
    <div class="code-block mt-4">
        <div v-for="i in history" :key="i.timestamp">
            <span class="opacity-50 mr-2 font-mono">{{ format(i.timestamp) }}</span>
            <span class="font-mono">{ value: {{ i.snapshot }} }</span>
        </div>
    </div>
</template>

<style>
.counter {
    display: grid;
    font-size: 2em;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 2em;
    place-items: center;
}

.counter-message {
    text-align: center;
}
</style>