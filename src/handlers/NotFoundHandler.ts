
export async function handleNotFound(req: Request): Promise<Response> {
    return new Response(JSON.stringify({
        "message": "Page not found!"
    }), {
        status: 404,
    })
}