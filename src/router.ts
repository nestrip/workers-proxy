import { Router } from "itty-router";


export function setupRouter(router: Router<Request>): void {

  router.post("/upload", async (req: Request) => {
    const formData = await req.formData();

    const file = formData.get("files");
    const authKey = req.headers.get("Authorization");

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

    // Im using cloudflare worker secrets, which sets a global variable
    const result = await fetch(API_URL, {
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

  });

  router.get("*", () => {
    return new Response(JSON.stringify({
      "message": "Page not found!"
    }), {
      status: 404,
    })
  })
}