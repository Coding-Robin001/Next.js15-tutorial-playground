import { addAnimal } from "@/prisma-db"
import Submit from "@/components/submit"
import { redirect } from "next/navigation"
import { useActionState } from "react"

type Errors = {
    name?: string,
    photoUrl?: string,
    fact?: string
}

type FormState = {
    errors: Errors;
}

export default function AddAnimalForm() {

    const initialState: FormState = {
        errors: {},
    }

    const [state, formAction, isPending] = useActionState(createAnimal, initialState)

    async function createAnimal(formdata: FormData) {
        "use server"

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

    return (
        <form
            action={formAction}
            className="max-w-lg border-green-300 mx-auto p-6 bg-green-50 rounded-2xl shadow-lg space-y-8 border border-green-300"
        >
            <h2 className="text-2xl font-semibold text-center text-green-800">
                Add New Animal
            </h2>

            <div>
                <input
                    type="text"
                    placeholder="Animal Name"
                    className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    name="name"
                    required
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
                    required
                />
                {
                    state.errors.photoUrl && <p className="text-red-500">{state.errors.photoUrl}</p>
                }
            </div>

            <div>
                <textarea
                    placeholder="Random Fact"
                    className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    name="fact"
                />
                {
                    state.errors.fact && <p className="text-red-500">{state.errors.fact}</p>
                }
            </div>

            <Submit />

        </form>

    );
}
