<template>
    <div ref="popoverElement" class="context-menu">
        <div :class="['burger-button', { 'is-visible': isVisible }]" @click="clickHandler">
            <menu-image />
        </div>
        <div v-if="isMenuOpened" class="context__popover">
            <div class="icon-wrapper" @click="editHandler">
                <img src="@/assets/images/icons/pencil.png" alt="edit" width="20" height="20" />
            </div>
            <div class="icon-wrapper" @click="removeHandler">
                <img src="@/assets/images/icons/bin.png" alt="remove" width="20" height="20" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// TODO: compress images

import MenuImage from '@/components/icons/MenuImage.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['remove-phrase', 'edit-phrase']);

const popoverElement = ref(null);
const isMenuOpened = ref(false);

const clickHandler = () => {
    isMenuOpened.value = !isMenuOpened.value;
};

const ousideClickListener = (e: MouseEvent) => {
    if (
        isMenuOpened.value &&
        e.target !== popoverElement.value &&
        !e.composedPath().includes(popoverElement.value)
    ) {
        isMenuOpened.value = false;
    }
};

const editHandler = () => {
    emit('edit-phrase');
    isMenuOpened.value = false;
};
const removeHandler = () => {
    emit('remove-phrase');
    isMenuOpened.value = false;
};

onMounted(() => {
    window.addEventListener('click', ousideClickListener);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', ousideClickListener);
});
</script>

<style lang="scss" scoped>
.context-menu {
    position: relative;

    .burger-button {
        opacity: 0;
        transition: 0.2s;
        height: 100%;

        &:hover {
            cursor: pointer;
        }
    }

    .is-visible {
        opacity: 100%;
    }

    .context__popover {
        position: absolute;
        top: calc(50% - 15px);
        left: 17px;
        display: flex;
        align-items: center;
        background-color: #a0b6fd;
        opacity: 0.8;
        height: 30px;
        border-radius: 3px;

        &:hover {
            cursor: pointer;
        }

        .icon-wrapper {
            padding: 4px 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
