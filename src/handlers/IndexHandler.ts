
export async function handleIndex(): Promise<Response> {
    return new Response(JSON.stringify({
        message: "Welcome to the nest.rip upload handler",
        version: ""
    }));
}