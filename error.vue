<!-- It's really just this simple. Nuxt looks for error.vue in the root of the project. -->
<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl ">Oops.</p>
        <p class="mt-7">{{ error.message }}</p>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style scoped>
</style>