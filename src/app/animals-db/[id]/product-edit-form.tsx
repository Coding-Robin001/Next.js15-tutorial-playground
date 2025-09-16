"use client"

import Submit from "@/components/submit"
import { useActionState } from "react"

import { FormState, editAnimal } from "@/actions'/animals"
import { AnimalCard } from "../animals"

export default function EditAnimalForm({ animal }: { animal: AnimalCard }) {


    const initialState: FormState = {
        errors: {},
    }

    const editAnimalWithId = editAnimal.bind(null, animal.id)

    const [state, formAction, isPending] = useActionState(editAnimalWithId, initialState)


    return (
        <form
            action={formAction}
            className="max-w-lg w-[800px] border-green-300 mx-auto p-6 bg-green-50 rounded-2xl shadow-lg space-y-8 border border-green-300"
        >
            <h2 className="text-2xl font-semibold text-center text-green-800">
                Update Animal
            </h2>

            <div>
                <input
                    type="text"
                    placeholder="Animal Name"
                    className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    name="name"
                    defaultValue={animal.name}
                />
                {
                    state.errors.name && <p className="text-red-500">{state.errors.name}</p>
                }
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Photo URL"
                    className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    name="photoUrl"
                    defaultValue={animal.src}
                // required
                />
                {
                    state.errors.photoUrl && <p className="text-red-500">{state.errors.photoUrl}</p>
                }
            </div>

            <div>
                <textarea
                    placeholder="Random Fact"
                    className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    // required
                    name="fact"
                    defaultValue={animal.randomFact ?? ""}
                />
                {
                    state.errors.fact && <p className="text-red-500">{state.errors.fact}</p>
                }
            </div>

            <Submit label="Update Animal" />

        </form>

    );
}
