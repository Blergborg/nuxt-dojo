<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
            </nav>
        </header>
    </div>

    <!-- Output the page content -->
    <!-- Slot is a nuxt component that says "this is where the other stuff goes" -->
    <div>
        <slot />
    </div>

    <footer>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<script setup>
</script>

<style scoped>
</style>