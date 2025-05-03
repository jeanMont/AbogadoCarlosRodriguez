import { z } from "zod"

export const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50, { message: "El nombre no debe exceder los 50 caracteres." }),
  telefono: z
    .string()
    .min(7, { message: "El teléfono debe tener al menos 7 dígitos." })
    .max(15, { message: "El teléfono no debe exceder los 15 dígitos." })
    .regex(/^\+?[0-9\s\-()]{7,15}$/, {
      message: "Formato de teléfono inválido.",
    }),
  email: z
    .string()
    .email({ message: "Correo electrónico inválido." }),
  asunto: z
    .string()
    .min(3, { message: "El asunto debe tener al menos 3 caracteres." })
    .max(100, { message: "El asunto no debe exceder los 100 caracteres." }),
  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(1000, { message: "El mensaje no debe exceder los 1000 caracteres." }),
})

// Para usar el tipo en tu handler o front:
export type FormSchema = z.infer<typeof formSchema>
