<template>
    <div class="main-search__wrapper">
        <!--        <main-search />-->
    </div>
    <div class="carousel__wrapper">
        <l-card-carousel :list="phraseList" />
    </div>

    <add-phrase v-model:phraseForm="addPhraseForm" :edited-card="editedCard" />

    <l-phrase-list :list="phraseList" @remove-phrase="onRemovePhrase" @edit-phrase="onEditPhrase" />
</template>

<script setup lang="ts">
import LCardCarousel from '@/features/LCardCarousel.vue';
import AddPhrase from '@/features/AddPhrase/AddPhrase.vue';
import LPhraseList from '@/features/LPhraseList.vue';
import { ref } from 'vue';
import { AddPhraseForm, Phrase } from '@/features/AddPhrase/types';
import { phraseListStore } from '@/features/AddPhrase/store';
import { storeToRefs } from 'pinia';

const addPhraseForm = ref<AddPhraseForm>({
    textTranslated: '',
    textOrigin: '',
});

const phraseListStoreInstance = phraseListStore();
const { list: phraseList } = storeToRefs(phraseListStoreInstance);
const { removePhrase, getPhrase } = phraseListStoreInstance;
const editedCard = ref();

const onRemovePhrase = (id: Phrase['valueId']) => {
    removePhrase(id);
};
const onEditPhrase = async (id: Phrase['valueId']) => {
    const targetPhrase = await getPhrase(id);

    if (targetPhrase) {
        editedCard.value = targetPhrase;
        addPhraseForm.value.textTranslated = editedCard.value.valueTextTranslated;
        addPhraseForm.value.textOrigin = editedCard.value.valueTextOrigin;
    }
};
</script>

<style lang="scss" scoped>
.main-search__wrapper {
    display: flex;
    justify-content: center;
}
.carousel__wrapper {
    display: flex;
    justify-content: center;
}
</style>
