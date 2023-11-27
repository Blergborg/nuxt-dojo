<template>
    <div>
        <p>Product Details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea dolorem minima amet repellendus reprehenderit!</p>
    </div>
</template>

<script setup>
    // This same template can be used to show the details of multiple products.

    // Get route param value here. Should be the same as the name we gave the file in brackets.
    const { id } = useRoute().params
</script>

<style scoped>
</style>