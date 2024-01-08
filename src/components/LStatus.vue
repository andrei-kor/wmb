<template>
    <div v-if="status === 0" :class="`background background_empty ${customClasses}`">
        <img src="@/assets/images/icons/add-to-queue.png" alt="learned" class="image__queue" />
    </div>
    <div
        v-else-if="status < 5"
        :class="`progress-circle ${customClasses}`"
        :style="getProgressStyle(status)"
    />
    <div v-else :class="`background background_success ${customClasses}`">
        <img src="@/assets/images/icons/check-mark.png" alt="learned" class="image__completed" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    status: {
        type: Number,
        default: 0,
    },
    customClasses: {
        type: String,
        default: '',
    },
});

const getProgressStyle = (sector: number) => {
    const angle = Math.round(sector * 72 + 90);
    if (angle <= 270) {
        return `
        background-color: #2f7b15;
        background-image: linear-gradient(${angle}deg, transparent 50%, #9bdaf3 50%),
            linear-gradient(90deg, #9bdaf3 50%, transparent 50%);`;
    }
    return `background-color: #9bdaf3;
        background-image: linear-gradient(${angle}deg, #2f7b15 50%, transparent 50%),
            linear-gradient(90deg, transparent 50%, #2f7b15 50%);`;
};
</script>

<style lang="scss" scoped>
@import '@/assets/colors';

.progress-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 12px;
        height: 12px;
        z-index: 100;
        border-radius: 50%;
        background-color: $--blue-015;
    }
}

.background {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;

    &_empty {
        background-color: $--blue-015;
    }

    &_success {
        background-color: $--green-100;
    }
}

.image {
    &__queue {
        position: absolute;
        object-fit: cover;
        top: 3px;
        left: 4px;
        width: 70%;
        height: 70%;
    }

    &__completed {
        position: absolute;
        object-fit: cover;
        top: 3px;
        left: 2px;
        width: 80%;
        height: 80%;
    }
}
</style>
