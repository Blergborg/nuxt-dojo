<template>
    <div>
        <!-- the index.vue of a pages subfolder will be given a route of the subfolder's name -->
        <!-- this will be found at "/products" route -->
        <h1>Products</h1>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>
</style>