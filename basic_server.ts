// To run: deno run --allow-net --allow-read basic_server.js

// Imports always done with absolute path
import { serve } from 'https://deno.land/std/http/server.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

// Can use relative paths for files within project
import { mapStory } from './stories.ts'

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const server = serve({
    // We parse as int since it is stored in env as string
    port: parseInt(config()['PORT']),
});

for await (const req of server) {
    const result = await fetch(url).then((result) => result.json());

    const stories = result.hits.map(mapStory);

    req.respond({ body: JSON.stringify(stories) });
}