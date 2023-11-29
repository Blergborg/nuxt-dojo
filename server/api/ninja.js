// First server route!
// This is where we write server code we don't want exposed to the client.

// This is the main section of a lot of these. just exporting an event handler.
export default defineEventHandler((event) => {
    // handle query params
    const {name} = getQuery(event)

    return {
        message: `Hello, ninja ${name}.`
    }
})