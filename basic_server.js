// To run: deno run --allow-net basic_server.js

// Imports always done with absolute path
import { serve } from 'https://deno.land/std/http/server.ts';

// This is not part of the Deno std library
import { format } from 'https://deno.land/x/date_fns/index.js';

const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const server = serve({ port: 8000 });

for await (const req of server) {
    const result = await fetch(url).then((result) => result.json());

    const stories = result.hits.map((hit) => ({
        title: hit.title,
        url: hit.url,
        createdAt: format(
            new Date(hit.created_at_i * 1000),
            'yyy-MM-dd'
        )
    }));

    req.respond({ body: JSON.stringify(stories) });
}