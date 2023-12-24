<template>
    <div class="navbar">
        <ul class="navbar__list">
            <li v-for="link in links" :key="link.href" class="navbar__item">
                <router-link class="navbar__link" :to="link.href">{{ link.text }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
export interface NavLinks {
    text: string;
    href: string;
}

const links: NavLinks[] = [
    { text: 'Home', href: '/' },
    { text: 'Training', href: '/training' },
    { text: 'Lists', href: '/lists' },
    { text: 'About', href: '/about' },
    { text: 'Account', href: '/account' },
];
</script>

<style scoped lang="scss">
.navbar {
    margin-bottom: 30px;

    &__list {
        display: flex;
        align-items: center;
    }

    &__item {
        margin: 0 10px;
        padding: 0 10px;

        &:hover {
            cursor: pointer;
        }
    }

    &__link {
        text-decoration: none;
        color: #e0e0e0;
    }
}
</style>
