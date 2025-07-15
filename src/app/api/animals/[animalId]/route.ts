import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET single animal
export async function GET(_req: Request, context: { params: { animalId: string } }) {
  const { animalId } = context.params;

  try {
    const singleAnimal = await prisma.animal.findUnique({
      where: {
        id: animalId,
      },
    });

    if (!singleAnimal) {
      return Response.json({ error: 'Animal not found' }, { status: 404 });
    }

    return Response.json(singleAnimal);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to fetch animal' }, { status: 500 });
  }
}

// UPDATE single animal
export async function PATCH(req: Request, context: { params: { animalId: string } }) {
  const { animalId } = context.params;
  const body = await req.json()

  try {
    const allowedFields = ['name', 'url', 'fact']
    const data = Object.fromEntries(
      Object.entries(body).filter(([key]) => allowedFields.includes(key))
    )

    if (!data || Object.keys(data).length === 0) {
      return Response.json({ error: 'No data provided for update' }, { status: 400 })
    }

    const updatedAnimal = await prisma.animal.update({
      where: {
        id: animalId,
      },
      data: data
    });

    return Response.json(updatedAnimal);
  } catch (error: any) {
    console.error(error);
    if (error.code === 'P2025') {
      // Prisma error: Record not found
      return Response.json({ error: 'Animal not found' }, { status: 404 })
    }
    return Response.json({ error: 'Failed to fetch animal' }, { status: 500 });
  }
}

//DELETE single animal
export async function DELETE(_req: Request, context: { params: { animalId: string } }) {
  const { animalId } = context.params;

  try {
    await prisma.animal.delete({
      where: {
        id: animalId,
      },
    });

    return Response.json({ message: 'Animal deleted successfully' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      // Prisma error: Record not found
      return Response.json({ error: 'Animal not found' }, { status: 404 });
    }

    return Response.json({ error: 'Failed to delete animal' }, { status: 500 });
  }
}


