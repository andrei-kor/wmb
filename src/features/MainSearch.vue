<template>
    <el-form :model="searchForm">
        <el-form-item>
            <LInput v-model="searchForm.searchValue" placeholder="search the word" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import LInput from '@/components/LInput.vue';
import { ref } from 'vue';

const searchForm = ref({
    searchValue: '',
});
</script>

<style lang="scss" scoped></style>
