import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all animals
export async function GET() {
  const animals = await prisma.animal.findMany()
  return Response.json(animals)
}

// CREATE new animal
export async function POST(req: Request) {
  const body = await req.json()
  const newAnimal = await prisma.animal.create({
    data: {
      name: body.name,
      photoUrl: body.photoUrl,
      fact: body.fact,
    }
  })
  return Response.json(newAnimal, { status: 201 })
}