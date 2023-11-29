// First server route!
// This is where we write server code we don't want exposed to the client.

// This is the main section of a lot of these. just exporting an event handler.
export default defineEventHandler(async (event) => {
    // handle query params
    const {name} = getQuery(event)

    // handle post data
    const {age} = await readBody(event)

    // api call with a private key (how to set environment variable later)
    // const {data} = await $fetch("3rdParty.api.here/relevant/enpointHere?apikey=gobiltyguk")

    return {
        message: `Hello, ninja ${name}. You are ${age}.`
    }

    // return for 3rd party api data
    // return data
})