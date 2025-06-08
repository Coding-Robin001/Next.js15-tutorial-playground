import { StaticImageData } from "next/image";
import animalPhoto1 from "./photos/animalPhoto1.jpg"
import animalPhoto2 from "./photos/animalPhoto2.jpg"
import animalPhoto3 from "./photos/animalPhoto3.jpg"
import animalPhoto4 from "./photos/animalPhoto4.jpg"
import animalPhoto5 from "./photos/animalPhoto5.jpg"
import animalPhoto6 from "./photos/animalPhoto6.jpg"
import animalPhoto7 from "./photos/animalPhoto7.jpg"
import animalPhoto8 from "./photos/animalPhoto8.jpg"
import animalPhoto9 from "./photos/animalPhoto9.jpg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export type AnimalImage = {
    id: string;
    name: string;
    src: string | StaticImport ;
    photographer: string;
    randomFact: string;
};


const animalImages: AnimalImage[] = [
    {
        id: "1",
        name: "Ostrich",
        src: animalPhoto8,
        photographer: "Paul",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "2",
        name: "Panda Bear",
        src: animalPhoto7,
        photographer: "Wole",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "3",
        name: "Cat",
        src: animalPhoto5,
        photographer: "Diana",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "4",
        name: "Chimpanzee",
        src: animalPhoto6,
        photographer: "Diana",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "5",
        name: "Ant",
        src: animalPhoto2,
        photographer: "Diana",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "6",
        name: "Fox",
        src: animalPhoto3,
        photographer: "Korede",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "7",
        name: "Baboon",
        src: animalPhoto4,
        photographer: "Olayinka",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
    {
        id: "8",
        name: "Leopard",
        src: animalPhoto9,
        photographer: "Diana",
        randomFact: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni nulla quidem animi tenetur nam libero. Nobis saepe harum, incidunt illo voluptatum labore iure deserunt aliquid voluptas suscipit dolores vel"
    },
]

export default animalImages;