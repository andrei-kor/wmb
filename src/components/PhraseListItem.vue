<template>
    <div class="list-item" @mouseenter="mouseHandle" @mouseleave="mouseHandle">
        <div class="item__text">
            <span>{{ index + 1 }}. </span><span>{{ phraseItem.valueTextOrigin }} - </span>
            <span>{{ phraseItem.valueTextTranslated }}</span>
        </div>
        <l-context-menu
            :is-visible="isContextMenuVisible"
            @remove-phrase="onRemovePhrase(phraseItem.valueId)"
            @edit-phrase="onEditPhrase(phraseItem.valueId)"
        />
    </div>
</template>

<script setup lang="ts">
import LContextMenu from '@/components/LContextMenu.vue';
import { PropType, ref } from 'vue';
import { Phrase } from '@/features/AddPhrase/types';

defineProps({
    phraseItem: {
        type: Object as PropType<Phrase>,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits<{
    (e: 'remove-phrase', phrase: Phrase['valueId']): void;
    (e: 'edit-phrase', phrase: Phrase['valueId']): void;
}>();

const isContextMenuVisible = ref(false);

const mouseHandle = (e: MouseEvent) => {
    if (e.type === 'mouseenter') {
        isContextMenuVisible.value = true;
        return;
    }
    if (e.type === 'mouseleave') {
        isContextMenuVisible.value = false;
        return;
    }
    isContextMenuVisible.value = false;
};

const onRemovePhrase = (id: Phrase['valueId']) => {
    isContextMenuVisible.value = false;
    emit('remove-phrase', id);
};

const onEditPhrase = (id: Phrase['valueId']) => {
    isContextMenuVisible.value = false;
    emit('edit-phrase', id);
};
</script>

<style lang="scss" scoped>
.list-item {
    display: inline-flex;
    align-items: center;

    margin: 7px 0;

    .item__text {
        display: inline-block;
        margin-right: 7px;
        flex-basis: content;
    }
}
</style>
