<template>
    <div>
        <!-- Another way we can override metadata is with the use of Nuxt components -->
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product"/>
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

    if (!product.value) {
        // createError is a Nuxt function that lets us build errors.
        // 'fatal' forces error.vue to show in the event of a browser-side error.
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>
</style>