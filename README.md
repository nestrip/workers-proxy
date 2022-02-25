# Workers Proxy
This is an upload-proxy for [nest.rip](https://nest.rip). 

## Summary
It uses the cloudflare network to provide a stable connection the nest.rip backend providing stable upload speeds. It also masks the ip address for our users. However there is about a 50ms extra latency

## Features
1. Provide a stable upload speed
2. Hide IP-Address

## Host my own?
If you'd like to host your own version, there are some things you need to do:

1. Install the [wrangler cli](https://developers.cloudflare.com/workers/cli-wrangler/install-update)
2. Login with cloudflare workers using `wrangler login`, make sure you have enabled workers in your cloudflare account
3. Set the API_URL secret using `wrangler secret put API_URL` in nest.rip's case it is `https://api.nest.rip`
4. Publish the worker to workers.dev using `wrangler publish -e dev`

## Open source?
Yes