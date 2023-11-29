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

    // useHead() is a Nuxt composable function that allows us to override the global defaults set in nuxt.config.ts.
    useHead({
        title: 'Nuxt Dojo Merch',
        meta: [
            {name: 'description', content: 'Nuxt3 Merch'}
        ]
    })
</script>

<style scoped>
</style>