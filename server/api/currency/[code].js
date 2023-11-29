// Just like pages, we can make subfolders with named files OR [parameter] files and Nuxt handles them the same way.

export default defineCachedEventHandler(async (event) => {
    // destructure currency code from event obj.
    const {code} = event.context.params
    // destructure api key from runtimeConfigs
    const {currencyKey} = useRuntimeConfig()

    const {uri} = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=${currencyKey}`

    const {data} = await $fetch(uri)
})