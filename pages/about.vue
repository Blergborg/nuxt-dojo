<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eaque quibusdam quo alias praesentium doloremque ratione quaerat ipsam ut aperiam.</p>
        <div>{{ data }}</div>
        <div>{{ currencyData }}</div>
    </div>
</template>

<script setup>
    // Can simply call our server routes like this. 
    // Then use the result as a variable just like the results of a 3rd party API call.

    // GET request
    // const data = await useFetch('/api/ninja?name=mario')

    // POST request
    const data = await useFetch('/api/ninja?name=mario', {
        method: 'post',
        body: {
            age: 30
        }
    })

    // 3rd party API request
    // const data = await useFetch('api/ninja')

    // 3rd party API request using a dynamic server route (fails b/c I haven't set the real api key in .env yet)
    const currencyData = await useFetch('/api/currency/USD')
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