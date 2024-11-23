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


export type giftType = {
    title: string
    shortDescription: string
    price: number
    imgUrl: string
}

export const list: giftType[] = Array.from({length: 6}, (_, i) => ({
    title: getRandomCategory(),
    price: +faker.commerce.price({min: 100, max: 200}),
    shortDescription: faker.food.description(),
    imgUrl: `/images/${i + 1}.png`,
}))
