import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET single animal
export async function GET(_req: Request, { params }: { params: { animalId: string } }) {
  const { animalId } = params;

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
