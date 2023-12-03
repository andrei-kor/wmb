<template>
    <div class="card" @click="cardClickHandler">
        <div v-if="isWordSide" class="card__title">{{ title }}</div>
        <div v-else class="card__title">{{ translatedTitle }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps({
    title: {
        type: String,
        required: true,
    },
    translatedTitle: {
        type: String,
        required: true,
    },
});

const isWordSide = ref(false);

const cardClickHandler = () => {
    isWordSide.value = !isWordSide.value;
};
</script>

<style lang="scss" scoped>
@import '@/assets/base';

.card {
    width: 500px;
    height: 300px;
    border-radius: 30px;
    background: $--vt-c-text-dark-2;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    &:hover {
        cursor: pointer;
    }

    &__title {
        font-size: 24px;
        font-weight: bold;
        transition: 0.3s;
    }
}
</style>
