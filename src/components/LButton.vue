<template>
    <button :style="styles" :disabled="disable" @click.prevent="onClick">
        <slot>button</slot>
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    width: {
        type: String || Number,
        default: 30,
    },
    height: {
        type: String || Number,
        default: 30,
    },
    disable: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    (e: 'click', id: number): void;
}>();

// const emit = defineEmits(['click']);

const styles = computed(() => {
    return {
        width: props.width + 'px',
        height: props.height + 'px',
    };
});

const onClick = (e) => {
    emit('click', e);
};
</script>

<style lang="scss">
button {
    cursor: pointer;
}
button:disabled {
    cursor: not-allowed;
}
</style>
