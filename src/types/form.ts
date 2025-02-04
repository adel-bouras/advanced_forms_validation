import { z } from "zod";

export const Login = z.object({
  email: z.string().email("Invalide email."),
  password: z
    .string()
    .min(8, "Your password must be up to 8 characters."),
});

export type TLogin = z.infer<typeof Login>;
