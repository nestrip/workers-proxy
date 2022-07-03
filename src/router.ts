import { Router } from "itty-router";
import {handleUploadRequest} from "./handlers/UploadHandler";
import {handleNotFound} from "./handlers/NotFoundHandler";


export function setupRouter(router: Router<Request>): void {

  router.post("/upload", handleUploadRequest);
  router.get("*", handleNotFound)
}