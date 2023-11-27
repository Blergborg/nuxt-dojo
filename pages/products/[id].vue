<template>
    <div>
        <p>Product Details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea dolorem minima amet repellendus reprehenderit!</p>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
    // This same template can be used to show the details of multiple products.

    // Get route param value here. Should be the same as the name we gave the file in brackets.
    const { id } = useRoute().params

    const uri = `https://fakestoreapi.com/products/${id}`

    // fetch the product
    // w/o unique key in options obj, useFetch will only fire off for the first product we fetch details for.
    // default behavior of useFetch is to minimize requests.
    const {data: product} = await useFetch(uri, { key: id })

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>
</style>