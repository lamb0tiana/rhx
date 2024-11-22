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
export const CategoryFilter : CategoryFilterType[] = [
    "Formules repas", "Repas & hébergement", "Repas & cadeau"
]
