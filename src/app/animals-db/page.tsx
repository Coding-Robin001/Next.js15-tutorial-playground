import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { getAnimals } from "@/prisma-db";
import Image from "next/image";
import { AnimalCard } from "./animals";
import Link from "next/link";



export default async function animalsDBpage() {

    const animals: AnimalCard[] = await getAnimals()

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10">
            <h2 className="text-center text-green-900 text-[2rem] font-bold mb-[2rem] drop-shadow-sm">
                Animal PhotoFeed
            </h2>

            <div
                className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6" >
                {animals.map(({ id, src, name }) => {
                    return (
                        <Link key={id} href={`/animals-db/${id}`}>
                            <div
                                key={id}
                                className=" bg-white border-2 border-green-600 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={src}
                                    alt={name}
                                    className="w-full h-auto object-cover aspect-square"
                                />
                                <div className="p-3 bg-green-50 text-center">
                                    <p className="text-lg font-semibold text-green-900">{name}</p>
                                </div>
                            </div>
                        </Link>

                    );
                })}
            </div>
        </div>
    );
}