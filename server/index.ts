import { z } from 'zod'
import { publicProcedure, router } from './trpc'
import { createHTTPServer } from '@trpc/server/adapters/standalone'

const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
})

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    const title = opts.input.title
    const description = opts.input.description

    // do db calls

    return {
      id: 1,
    }
  }),
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
