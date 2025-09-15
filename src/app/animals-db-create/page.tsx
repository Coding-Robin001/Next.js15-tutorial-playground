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
            className="max-w-lg border-green-300 mx-auto p-6 bg-green-50 rounded-2xl shadow-lg space-y-8 border border-green-300"
        >
            <h2 className="text-2xl font-semibold text-center text-green-800">
                Add New Animal
            </h2>

            <input
                type="text"
                placeholder="Animal Name"
                className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                name="name"
                required
            />

            <input
                type="text"
                placeholder="Photo URL"
                className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                name="photoUrl"
                required
            />

            <textarea
                placeholder="Random Fact"
                className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                name="fact"
            />

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Add Animal
            </button>
        </form>

    );
}
