<template>
    <div class="card-carousel">
        <l-button width="70" height="150" :disable="isLeftButtonDisable" @click="handleLeft">
            <l-icon width="40" height="40" color="#3780B5">
                <left />
            </l-icon>
        </l-button>
        <l-card
            :title="cardList[currentCardId].title"
            :translated-title="cardList[currentCardId].translatedTitle"
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
import { computed, ref } from 'vue';

const cardList = [
    { id: 0, title: 'Card 1', translatedTitle: 'Перевод 1' },
    { id: 1, title: 'Card 2', translatedTitle: 'Перевод 2' },
    { id: 2, title: 'Card 3', translatedTitle: 'Перевод 3' },
    { id: 3, title: 'Card 4', translatedTitle: 'Перевод 4' },
];

const currentCardId = ref(0);
const isLeftButtonDisable = computed(() => currentCardId.value === 0);
const isRightButtonDisable = computed(() => currentCardId.value === cardList.length - 1);

const handleLeft = () => {
    currentCardId.value > 0 ? (currentCardId.value -= 1) : false;
};

const handleRight = () => {
    currentCardId.value < cardList.length ? (currentCardId.value += 1) : false;
};
</script>

<style scoped lang="scss">
.card-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
