import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
import { headers } from 'next/headers'

const prisma = new PrismaClient()

// GET all animals
export async function GET(req: NextRequest) {

  const headersList = await headers()
  console.log(headersList.get("Authorization"))


  // const requestHeaders = new Headers(req.headers)
  // console.log(requestHeaders.get("Authorization"))


  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get("query")
  const limitParam = searchParams.get("limit")

  // Parse the limit safely (default to 10 if not provided or invalid)
  const limit = limitParam && !isNaN(Number(limitParam)) ? parseInt(limitParam) : 2

  try {
    const animals = await prisma.animal.findMany({
      where: query
        ? {
          name: {
            contains: query.toLowerCase()
          },
        }
        : undefined,
      take: limit
    })
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
