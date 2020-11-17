// To run: deno run --allow-net basic_server.js

// Imports always done with absolute path
import { serve } from 'https://deno.land/std/http/server.ts';

// Can use relative paths for files within project
import { mapStory } from './stories.js'

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const server = serve({ port: 8000 });

for await (const req of server) {
    const result = await fetch(url).then((result) => result.json());

    const stories = result.hits.map(mapStory);
    
    req.respond({ body: JSON.stringify(stories) });
}