import { Router } from "itty-router";
import { setupRouter } from "./router";

export const router = Router<Request>()

setupRouter(router)

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request))
})
