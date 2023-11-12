<template>
    <el-input :model-value="localValue" :placeholder="placeholder" @input="handleInput">
        <template #append>
            <l-button width="30" height="30">
                <l-icon width="30" height="30" color="#3780B5">
                    <search />
                </l-icon>
            </l-button>
        </template>
    </el-input>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Search from '@/components/icons/Search.vue';
import LIcon from '@/components/LIcon.vue';
import LButton from '@/components/LButton.vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
});
const emit = defineEmits(['update:modelValue']);

const localValue = ref<string | number>(props.modelValue);

watchEffect(() => console.log('localValue1', localValue.value));

const handleInput = (inputValue: string | number) => {
    localValue.value = inputValue;
    emit('update:modelValue', inputValue);
};
</script>

<style scoped lang="scss">
.el-input-group {
    display: flex;
}
.el-input__inner {
    height: 30px;
}
</style>
