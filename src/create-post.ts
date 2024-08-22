import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log : ['info', 'query']})     // log give is sql query in our terminal 

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
        title: "Harry Potter and the Philosopher's Stone",
        content: "Movie",
        published: true,
        author :{                                   // You Can also write authorId here in place of author
            connect :{
                id: 1
            }
        }
    }
  })
}

main()
  // .then(async () => {
  //   console.log("Done with the query")
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })