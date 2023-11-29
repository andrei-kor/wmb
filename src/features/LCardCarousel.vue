<template>
    <div v-if="list.length" class="card-carousel">
        <l-button width="70" height="150" :disable="isLeftButtonDisable" @click="handleLeft">
            <l-icon width="40" height="40" color="#3780B5">
                <left />
            </l-icon>
        </l-button>
        <l-card
            :title="list[currentCardPosition].valueTextOrigin"
            :translated-title="list[currentCardPosition].valueTextTranslated"
        />
        <l-button width="70" height="150" :disable="isRightButtonDisable" @click="handleRight">
            <l-icon width="40" height="40" color="#3780B5">
                <right />
            </l-icon>
        </l-button>
    </div>
</template>

<script setup lang="ts">
import LCard from '@/components/LCard.vue';
import '@/assets/base.scss';
import Left from '@/components/icons/Left.vue';
import LIcon from '@/components/LIcon.vue';
import LButton from '@/components/LButton.vue';
import Right from '@/components/icons/Right.vue';
import { computed, PropType, ref } from 'vue';
import { Phrase } from '@/features/AddPhrase/types';

const props = defineProps({
    list: {
        type: Array as PropType<Phrase[]>,
        default: () => [],
    },
});

const currentCardPosition = ref(0);
const isLeftButtonDisable = computed(() => currentCardPosition.value === 0);
const isRightButtonDisable = computed(() => currentCardPosition.value === props.list.length - 1);

const handleLeft = () => {
    currentCardPosition.value > 0 ? (currentCardPosition.value -= 1) : false;
};

const handleRight = () => {
    currentCardPosition.value < props.list.length ? (currentCardPosition.value += 1) : false;
};
</script>

<style lang="scss" scoped>
.card-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
