import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type {AppRouter} from '../../../server/router/app';


export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
          url: 'http://localhost:8000/trpc',
        }),
      ],  
})