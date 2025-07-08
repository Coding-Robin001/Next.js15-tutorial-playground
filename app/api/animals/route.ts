import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const animals = await prisma.animal.findMany()
  return Response.json(animals)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newAnimal = await prisma.animal.create({
    data: {
      name: body.name,
      photoUrl: body.photoUrl,
      fact: body.fact,
    }
  })
  return Response.json(newAnimal)
}