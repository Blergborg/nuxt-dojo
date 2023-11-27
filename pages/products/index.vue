<template>
    <div>
        <!-- the index.vue of a pages subfolder will be given a route of the subfolder's name -->
        <!-- this will be found at "/products" route -->
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <!-- ":" before "to" == databinding -->
                <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
                <ProductCard :product="p" /> 
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch products (destructure the response's data property and call it products)
    const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
</style>