export async function handleRequest(request: Request): Promise<Response> {
  if (request.url.endsWith("/upload") && request.method == "POST") {

    const formData = await request.formData();
    const file = formData.get("files");
    const authKey = request.headers.get("Authorization");

    if (!formData.has("files") || !(file instanceof File)) {
      return new Response(JSON.stringify({ message: "No file provided!" }), {
        status: 400
      });
    }

    if (!authKey) {
      return new Response(JSON.stringify({ message: "No authentication provided" }), {
        status: 400
      });
    }

    const result = await fetch(`https://api.nest.rip/files/upload`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: authKey,
        "User-Agent": "Cloudflare Worker"

      }
    });

    return new Response(await result.text(), {
      status: result.status
    });
  }

  return new Response(JSON.stringify({
    "message": "Not Found!"
  }), {
    status: 404
  });
}
