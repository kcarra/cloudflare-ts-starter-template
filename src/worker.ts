async function handleRequest(event: FetchEvent) {
    let headers = new Headers();
    headers.set("Content-Type", "text/plain");
    return new Response("Welcome to the cloudflare ts starter template", {headers})
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event));
});