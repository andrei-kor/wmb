<template>
    <div class="main-search__wrapper">
        <!--        <main-search />-->
    </div>
    <div class="carousel__wrapper">
        <l-card-carousel :list="phraseList" />
    </div>

    <add-phrase v-model:phraseForm="addPhraseForm" />

    <l-phrase-list :list="phraseList" />
</template>

<script setup lang="ts">
import LCardCarousel from '@/features/LCardCarousel.vue';
import AddPhrase from '@/features/AddPhrase/AddPhrase.vue';
import LPhraseList from '@/features/LPhraseList.vue';
import { ref } from 'vue';
import { AddPhraseForm } from '@/features/AddPhrase/types';
import { phraseListStore } from '@/features/AddPhrase/store';
import { storeToRefs } from 'pinia';

const defaultAddPhraseForm = {
    textTranslated: '',
    textOrigin: '',
};

const addPhraseForm = ref<AddPhraseForm>({ ...defaultAddPhraseForm });

const { list: phraseList } = storeToRefs(phraseListStore());
</script>

<style lang="scss" scoped>
.main-search__wrapper {
    display: flex;
    justify-content: center;
}
.carousel__wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}
</style>
