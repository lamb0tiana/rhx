import {z} from "zod";

export const fromSchema = z.object({
    email: z.string().email("Adresse e-mail invalide"),
    address: z.string().optional().refine((val) => !val || val.length >= 5, {
        message: "Votre adresse doit contenir au moins 5 caractères",
    }),
    cp: z.string().optional().refine((val) => !val || val.length >= 5, {
        message: "Le code postal doit contenir au moins 5 caractères",
    }),
    city: z.string().optional().refine((val) => !val || val.length >= 3, {
        message: "La ville doit contenir au moins 3 caractères",
    }),
});



export const toSchema = z.object({
    receiver: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    from: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
});

export const commandModelSchema = z.object({
    model: z.string({
        message: "Choisir un modèle"
    }),
})
export const formSchema = z.object({
    fromSchema, toSchema, commandModelSchema
});

export type CheckoutFormType = z.infer<typeof formSchema>;
