import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log : ['info', 'query']})

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
      email: "happy@gmail.com",
      name: "Praveen Chasta"
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