import { Animal } from "@prisma/client";
import { prisma } from "./utils/prisma"


export async function getAnimals(): Promise<{ id: string; name: string; src: string; randomFact: string }[]> {
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

export async function getSingleAnimal(id: string): Promise<Animal | null> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return await prisma.animal.findUnique({ where: { id } });
    } catch (error) {
        console.error(`Error fetching animal with id ${id}:`, error);
        throw new Error("Failed to fetch animal");
    }
}

export async function addAnimal(name: string, src: string, randomFact: string): Promise<Animal> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return await prisma.animal.create({
            data: { name, photoUrl: src, fact: randomFact },
        })
    } catch (error) {
        console.error("Error adding animal:", error);
        throw new Error("Failed to add animal");
    }
}

export async function updateAnimal(id: string, name: string, src: string, randomFact: string): Promise<Animal> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return await prisma.animal.update({
            where: { id },
            data: { name, photoUrl: src, fact: randomFact },
        });
    } catch (error) {
        console.error(`Error updating animal with id ${id}:`, error);
        throw new Error("Failed to update animal");
    }
}

export async function deleteAnimal(id: string): Promise<Animal> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return await prisma.animal.delete({
            where: { id },
        });
    } catch (error) {
        console.error(`Error deleting animal with id ${id}:`, error);
        throw new Error("Failed to delete animal");
    }
}