import {initTRPC} from '@trpc/server';
import z from 'zod';
import { v4 as uuidv4 } from 'uuid';

export interface ChatMessage {
    id:string,
    user:string,
    message:string,
}

const messages : ChatMessage[] =[
    { id: uuidv4(), user: 'User1', message: 'This is my the first message!' },
    { id: uuidv4(), user: 'User2', message: 'Hello there 🎉' },
]


const t = initTRPC.create();

export const appRouter = t.router({
    getMessage: t.procedure.query( () => {
        return 'Hi'
    })
})

export type AppRouter = typeof appRouter;