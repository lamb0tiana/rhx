import {faker} from "@faker-js/faker/locale/fr";

export type CategoryFilterType = "Formules repas" | "Repas & hébergement" | "Repas & cadeau"
const getRandomCategory = (): CategoryFilterType => {
    const categories: CategoryFilterType[] = [
        "Formules repas",
        "Repas & hébergement",
        "Repas & cadeau",
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};
export const CategoryFilter: CategoryFilterType[] = [
    "Formules repas", "Repas & hébergement", "Repas & cadeau"
]


type giftType = {
    title: string
    shortDescription: string
    price: number
}
export const list: giftType[] = Array.from({length: 10}, (_, i) => ({
    title: CategoryFilter[Math.floor(Math.random() * CategoryFilter.length)],
    price: faker.commerce.price({min: 100, max: 200}),
    shortDescription: faker.food.description(),

}));
