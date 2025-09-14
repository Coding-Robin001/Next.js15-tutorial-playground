import { addAnimal } from "@/prisma-db"
import { redirect } from "next/navigation"

export default function AddAnimalForm() {

    async function createAnimal(formdata: FormData) {
        "use server"

        const name = formdata.get("name") as string
        const photoUrl = formdata.get("photoUrl") as string
        const fact = formdata.get("fact") as string

        await addAnimal(name, photoUrl, fact)
        redirect("/animals-db")
    }

    return (
        <form
            action={createAnimal}
            className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-8 min-h-[90vh] border"
        >
            <h2 className="text-2xl font-semibold text-center">Add New Animal</h2>

            <input
                type="text"
                placeholder="Animal Name"
                className="w-full p-2 border rounded-lg"
                name="name"
                required
            />

            <input
                type="text"
                placeholder="Photo URL"
                className="w-full p-2 border rounded-lg"
                name="photoUrl"
                required
            />

            <textarea
                placeholder="Random Fact"
                className="w-full p-2 border rounded-lg"
                required
                name="fact"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
                Add Animal
            </button>

        </form>
    );
}
