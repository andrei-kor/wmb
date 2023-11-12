<template>
    <div class="card" @click="cardClickHandler">
        <div v-if="isAnswer" class="card__title">{{ title }}</div>
        <div v-else class="card__title">{{ translatedTitle }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    translatedTitle: {
        type: String,
        required: true,
    },
});

const isAnswer = ref(false);

const cardClickHandler = () => {
    isAnswer.value = !isAnswer.value;
};
</script>

<style lang="scss">
@import '@/assets/base';

.card {
    width: 500px;
    height: 300px;
    border-radius: 30px;
    background: $--vt-c-text-dark-2;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
        font-size: 24px;
        font-weight: bold;
        transition: 0.3s;
    }
}
</style>
