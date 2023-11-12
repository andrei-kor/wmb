<template>
    <slot :style="styles">icon</slot>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '#000000',
    },
    width: {
        type: String || Number,
        required: true,
    },
    height: {
        type: String || Number,
        required: true,
    },
});

const styles = computed(() => ({
    color: props.color,
    width: props.width + 'px',
    height: props.height + 'px',
}));
</script>
