import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '../server'

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
})

async function main() {
  let res = await trpc.createTodo.mutate({
    title: 'ABC',
    description: 'AABBCC',
  })
  console.log(res)
}

main()
