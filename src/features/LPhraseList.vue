<template>
    <div v-if="list.length" class="phrase-list">
        <div v-for="(phrase, index) in list" :key="phrase.valueId">
            <phrase-list-item
                :phrase-item="phrase"
                :index="index"
                @remove-phrase="$emit('remove-phrase', $event)"
                @edit-phrase="$emit('edit-phrase', $event)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Phrase } from '@/features/AddPhrase/types';
import PhraseListItem from '@/components/PhraseListItem.vue';

defineProps({
    list: {
        type: Array as PropType<Phrase[]>,
        default: () => [],
    },
});

defineEmits<{
    (e: 'remove-phrase', phrase: Phrase['valueId']): void;
    (e: 'edit-phrase', phrase: Phrase['valueId']): void;
}>();
</script>

<style scoped lang="scss">
@import '@/assets/colors';

.phrase-list {
    color: $--grey-001;
    margin: 50px;
}
</style>
