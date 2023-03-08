import express from 'express';
import cors from 'cors';
import {createExpressMiddleware} from '@trpc/server/adapters/express';
import { appRouter } from './router/app';

const main = async () => {
    const app = express()
    app.use(cors())

    app.use('/trpc',createExpressMiddleware({
        router:appRouter,
 
    }))
    app.listen(8000)
}

main()