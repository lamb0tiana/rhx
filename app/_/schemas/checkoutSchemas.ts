import {z} from "zod";

export const fromSchema = z.object({
    email: z.string().email("Adresse e-mail invalide"),
    address: z.string().min(5, "Votre adresse doit contenir au moins 5 caractères").optional(),
    cp: z.string().min(5, "Le code postal doit contenir au moins 5 caractères").optional(),
    city: z.string().min(3, "La ville doit contenir au moins 3 caractères").optional()
});

export const toSchema = z.object({
    receiver: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    from: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
});

export const formSchema = z.object({
    fromSchema, toSchema
});

export type CheckoutFormType = z.infer<typeof formSchema>;
