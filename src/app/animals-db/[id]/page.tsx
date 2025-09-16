
import { getSingleAnimal } from "@/prisma-db"
import EditAnimalForm from "./product-edit-form"
import { notFound } from "next/navigation"

export default async function UpdateAnimalForm({ params }: { params: { id: string } }) {

    const { id } = params
    const animal = await getSingleAnimal(id)

    if (!animal) {
        notFound()
    }
    return <EditAnimalForm animal={animal} />


}
