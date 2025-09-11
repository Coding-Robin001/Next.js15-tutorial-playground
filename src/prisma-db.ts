import { prisma } from "./utils/prisma"

export async function getAnimals() {
  const animals = await prisma.animal.findMany()

  return animals.map((a) => ({
    id: a.id,
    name: a.name,
    src: a.photoUrl,      // map DB field → src
    randomFact: a.fact,   // map DB field → randomFact
  }))
}


export async function getSingleAnimal(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.animal.findUnique({
        where: { id },
    })
}

export async function addAnimal(name: string, src: string, randomFact: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.animal.create({
        data: { name, photoUrl: src, fact: randomFact }
    })
}

export async function updateAnimal(id: string, name: string, src: string, randomFact: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.animal.update({
        where: { id },
        data: { name, photoUrl: src, fact: randomFact }
    })
}

export async function deleteAnimal(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.animal.delete({
        where: { id }
    })
}