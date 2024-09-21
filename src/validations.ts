import { z } from "zod";

export const validationsSchema = z.object({
   vorname: z.string().min(1, { message: "Vorname ist erforderlich." }),
   nachname: z.string().min(1, { message: "Nachname ist erforderlich." }),
   email: z
     .string()
     .min(1, { message: "E-Mail Adresse ist erforderlich." })
     .email({ message: "Bitte gib eine korrekte E-Mail Adresse ein." }),
   password: z
     .string()
     .min(1, { message: "Passwort ist erforderlich." })
     .min(8, { message: "Passwort muss mindestens 8 Zeichen lang sein." }),
})
