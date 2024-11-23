import {faker} from "@faker-js/faker/locale/fr";

export type CategoryFilterType = "Tous" | "Formules repas" | "Repas & hébergement" | "Repas & cadeau"
export const getRandomCategory = (): CategoryFilterType => {
    const categories: CategoryFilterType[] = [
        "Formules repas",
        "Repas & hébergement",
        "Repas & cadeau",
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};
export const CategoryFilter: CategoryFilterType[] = [
   "Tous",  "Formules repas", "Repas & hébergement", "Repas & cadeau"
]


export type ProductType = {
    id: number
    title: string
    shortDescription: string
    description: string
    price: number
    imgUrl: string
    person: number
}

export const products: ProductType[] = Array.from({length: 6}, (_, i) => ({
    id: i+1,
    title: getRandomCategory(),
    price: +faker.commerce.price({min: 100, max: 200}),
    shortDescription: faker.food.description(),
    description: faker.lorem.lines({
        min:1, max: 3
    }),
    imgUrl: `/images/${i + 1}.png`,
    person: faker.number.int({
        min: 1,
        max: 4
    })
}))
