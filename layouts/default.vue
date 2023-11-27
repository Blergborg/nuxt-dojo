<!-- 
    This is a bit special. Nuxt will automatically wrap pages with what's in this default.vue layout file.
 -->
<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <!-- Instead of anchor (<a>) tags, Nuxt gives us these link components. -->
                        <!-- 
                            A reason we do this is anchor tags make a new request to the server for link route.
                            Nuxt is meant to behave as a SPA after it is loaded in the browser.
                            NuxtLink components just swap out the components being displayed.
                            NuxtLinks also come with some built-in styling classes that can be used to change how currently active/inactive links are displayed.
                            -->
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

    <!-- Output the page content -->
    <!-- Slot is a Nuxt component that says "this is where the other stuff goes" -->
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<script setup>
</script>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>