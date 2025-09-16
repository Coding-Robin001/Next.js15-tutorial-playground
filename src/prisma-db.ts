import { prisma } from "./utils/prisma"
import { AnimalCard } from "./app/animals-db/animals";


export async function getAnimals(): Promise<AnimalCard[]> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const animals = await prisma.animal.findMany({
            select: { id: true, name: true, photoUrl: true, fact: true },
        })

        return animals.map((a) => ({
            id: a.id,
            name: a.name,
            src: a.photoUrl,
            randomFact: a.fact,
        }))
    } catch (error) {
        console.error("Error fetching animals:", error);
        throw new Error("Failed to fetch animals");
    }
}

export async function getSingleAnimal(id: string): Promise<AnimalCard | null> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const animal = await prisma.animal.findUnique({ where: { id } });
        return animal ? {
            id: animal.id,
            name: animal.name,
            src: animal.photoUrl,
            randomFact: animal.fact,
        }
            : null
    } catch (error) {
        console.error(`Error fetching animal with id ${id}:`, error);
        throw new Error("Failed to fetch animal");
    }
}

export async function addAnimal(name: string, src: string, randomFact: string): Promise<AnimalCard> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const animal = await prisma.animal.create({
            data: { name, photoUrl: src, fact: randomFact },
        })
        return {
            id: animal.id,
            name: animal.name,
            src: animal.photoUrl,
            randomFact: animal.fact,
        }
    } catch (error) {
        console.error("Error adding animal:", error);
        throw new Error("Failed to add animal");
    }
}

export async function updateAnimal(id: string, name: string, src: string, randomFact: string): Promise<AnimalCard> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const animal = await prisma.animal.update({
            where: { id },
            data: { name, photoUrl: src, fact: randomFact },
        });
        return {
            id: animal.id,
            name: animal.name,
            src: animal.photoUrl,
            randomFact: animal.fact,
        }
    } catch (error) {
        console.error(`Error updating animal with id ${id}:`, error);
        throw new Error("Failed to update animal");
    }
}

export async function deleteAnimal(id: string): Promise<AnimalCard> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const animal = await prisma.animal.delete({
            where: { id },
        })
        return {
            id: animal.id,
            name: animal.name,
            src: animal.photoUrl,
            randomFact: animal.fact,
        }
    } catch (error) {
        console.error(`Error deleting animal with id ${id}:`, error);
        throw new Error("Failed to delete animal");
    }
}