"use server"

import { addAnimal, updateAnimal } from "@/prisma-db";
import { redirect } from "next/navigation";


export type Errors = {
    name?: string,
    photoUrl?: string,
    fact?: string
}

export type FormState = {
    errors: Errors;
}

export async function createAnimal(prevState: FormState, formdata: FormData) {

    const name = formdata.get("name") as string
    const photoUrl = formdata.get("photoUrl") as string
    const fact = formdata.get("fact") as string

    const errors: Errors = {}

    if (!name) {
        errors.name = "title is required!"
    }
    if (!photoUrl) {
        errors.photoUrl = "photoUrl is required!"
    }
    if (!fact) {
        errors.fact = "fact is required!"
    }

    if (Object.keys(errors).length > 0) {
        return { errors: errors }
    }

    await addAnimal(name, photoUrl, fact)
    redirect("/animals-db")
}


export async function editAnimal(id: string, prevState: FormState, formdata: FormData) {

    const name = formdata.get("name") as string
    const photoUrl = formdata.get("photoUrl") as string
    const fact = formdata.get("fact") as string

    const errors: Errors = {}

    if (!name) {
        errors.name = "title is required!"
    }
    if (!photoUrl) {
        errors.photoUrl = "photoUrl is required!"
    }
    if (!fact) {
        errors.fact = "fact is required!"
    }

    if (Object.keys(errors).length > 0) {
        return { errors: errors }
    }

    await updateAnimal(id, name, photoUrl, fact)
    redirect("/animals-db")
}

