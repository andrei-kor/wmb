<template>
    <div class="add-phrase__wrapper">
        <el-form ref="phraseForm" :model="inputPhraseForm">
            <el-form-item class="translated-input__wrapper">
                <LInput v-model="inputPhraseForm.textOrigin" placeholder="Word" />
            </el-form-item>

            <el-form-item class="origin-input__wrapper">
                <LInput v-model="inputPhraseForm.textTranslated" placeholder="Translation" />
            </el-form-item>

            <l-button width="30" height="30" @click="onSendForm"> Ok </l-button>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { AddPhraseForm } from './types';
import LButton from '@/components/LButton.vue';
import LInput from '@/components/LInput.vue';
import { onMounted, PropType, Ref, ref, watch } from 'vue';
import { phraseListStore } from '@/features/AddPhrase/store';

const props = defineProps({
    phraseForm: {
        type: Object as PropType<AddPhraseForm>,
        required: true,
    },
});

const phraseList = phraseListStore();

const inputPhraseForm: Ref<AddPhraseForm> = ref({
    textTranslated: '',
    textOrigin: '',
});

const onSendForm = () => {
    phraseList.addPhrase(inputPhraseForm.value);
};

watch(
    () => props.phraseForm,
    () => {
        inputPhraseForm.value = { ...props.phraseForm };
    },
    { deep: true }
);

onMounted(() => {
    inputPhraseForm.value = { ...props.phraseForm };
});
</script>

<style lang="scss" scoped>
.add-phrase__wrapper {
    & .el-form {
        display: grid;
        grid-template-columns: 1fr 1fr 30px;
        grid-gap: 10px;
        align-items: end;
    }

    width: 700px;
    margin: 20px auto 0;
}
</style>
