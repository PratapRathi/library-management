import { number, z } from "zod";


export const signUpScheme = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("University card is required"),
})

export const signInScheme = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})