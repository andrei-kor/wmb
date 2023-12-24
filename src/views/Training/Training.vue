<template>
    <l-card-carousel :list="wordList" />
</template>

<script setup lang="ts">
import LCardCarousel from '@/features/LCardCarousel.vue';
import { phraseListStore } from '@/features/AddPhrase/store';
import { storeToRefs } from 'pinia';

const phraseListStoreInstance = phraseListStore();
const { list: wordList } = storeToRefs(phraseListStoreInstance);
</script>

<style scoped lang="scss"></style>
