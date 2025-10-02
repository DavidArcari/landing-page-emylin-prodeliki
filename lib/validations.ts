import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  preferredDate: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Você deve concordar com o tratamento dos dados',
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
