import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 8000;
const app = new Application();

const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Hello Deno';
    })
    .get('/1', (ctx) => {
        ctx.response.body = 'Hello Deno 1';
    })
    .get('/2', (ctx) => {
        ctx.response.body = "Hello Deno 2";
    })

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
    console.log(`Listening on localhost:${port}`);
});

await app.listen({ port});