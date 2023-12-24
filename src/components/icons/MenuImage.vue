<template>
    <div class="menu-button">
        <div />
        <div />
        <div />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/colors';

.menu-button > div {
    width: 5px;
    height: 5px;
    background-color: $--grey-001;
    opacity: 0.8;
    border-radius: 50%;
    margin: 2px;
}

.menu-button:active > div {
    background-color: $--grey-010;
}
</style>
