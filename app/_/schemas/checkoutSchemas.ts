import {z} from "zod";

export const giverSchema = z.object({
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


export const receiverSchema = z.object({
    receiver: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    from: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
});

export const modelTypeSchema = z.object({
    value: z.string({
        message: "Choisir un modèle"
    }),
})

export const cgSchema = z.object({
    cgv: z
        .boolean()
        .refine((val) => val === true, {
            message: "error cgv",
        }),
    cgu: z
        .boolean()
        .refine((val) => val === true, {
            message: "error cgu",
        }),
});
export const formSchema = z.object({
      giver: giverSchema,  receiver: receiverSchema, model: modelTypeSchema, cg: cgSchema
});

export type VoucherType ={
    giver: z.infer<typeof giverSchema>
    receiver: z.infer<typeof receiverSchema>
    model: z.infer<typeof modelTypeSchema>
}

export type CheckoutFormType = z.infer<typeof formSchema>;
