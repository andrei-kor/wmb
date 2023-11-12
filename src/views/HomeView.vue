<template>
    <div class="main-search__wrapper">
        <main-search />
    </div>
    <div class="carousel__wrapper">
        <card-carousel />
    </div>
</template>

<script setup lang="ts">
import CardCarousel from '@/features/CardCarousel.vue';
import MainSearch from '@/features/MainSearch.vue';
</script>

<style scoped lang="scss">
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
