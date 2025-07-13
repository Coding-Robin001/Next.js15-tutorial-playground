import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET all animals
export async function GET() {
  try {
    const animals = await prisma.animal.findMany()
    return Response.json(animals)
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to fetch animals' }, { status: 500 })
  }
}


export async function POST(req: Request) {
  const body = await req.json()
  if (!body.name || !body.photoUrl || !body.fact) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const newAnimal = await prisma.animal.create({
      data: {
        name: body.name,
        photoUrl: body.photoUrl,
        fact: body.fact,
      }
    })
    return Response.json(newAnimal, { status: 201 })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to create animal, something went wrong!' }, { status: 500 })
  }
}
