<template>
    <ul>
        <li v-for="phrase in list" :key="phrase.valueId">
            <span>{{ phrase.valueId }}. </span><span>{{ phrase.valueTextOrigin }} - </span>
            <span>{{ phrase.valueTextTranslated }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Phrase } from '@/features/AddPhrase/types';

defineProps({
    list: {
        type: Array as PropType<Phrase[]>,
        default: () => [],
    },
});
</script>

<style scoped lang="scss">
ul {
    color: white;
    margin: 50px;
}
</style>
