import { z } from "zod";

export const Login = z.object({
  email: z
    .string()
    .min(1, "Email adress is required.")
    .email("Invalide email."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Your password must be up to 8 characters."),
});

export type TLogin = z.infer<typeof Login>;
