<template>
    <div>
        <header>
            <nav>
                <ul>
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
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <h2>Home</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eaque quibusdam quo alias praesentium doloremque ratione quaerat ipsam ut aperiam.</p>
    </div>
</template>

<script setup>
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>