<template>
    <div class="menu-button">
        <div />
        <div />
        <div />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.menu-button > div {
    width: 5px;
    height: 5px;
    background-color: #e0e0e0;
    opacity: 0.8;
    border-radius: 50%;
    margin: 2px;
}

.menu-button:active > div {
    background-color: #bbbbbb;
}
</style>
