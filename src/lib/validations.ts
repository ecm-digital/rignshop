import { z } from 'zod';

export const customerInfoSchema = z.object({
  firstName: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  lastName: z.string().min(2, 'Nazwisko musi mieć co najmniej 2 znaki'),
  email: z.string().email('Nieprawidłowy adres email'),
  phone: z.string().min(9, 'Numer telefonu musi mieć co najmniej 9 cyfr'),
  address: z.object({
    street: z.string().min(5, 'Adres musi mieć co najmniej 5 znaków'),
    city: z.string().min(2, 'Miasto musi mieć co najmniej 2 znaki'),
    postalCode: z
      .string()
      .regex(/^\d{2}-\d{3}$/, 'Kod pocztowy musi być w formacie XX-XXX'),
    country: z.string().min(2, 'Kraj musi mieć co najmniej 2 znaki'),
  }),
});

export const orderSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1, 'Ilość musi być większa niż 0'),
  customerInfo: customerInfoSchema,
});

export type CustomerInfoFormData = z.infer<typeof customerInfoSchema>;
export type OrderFormData = z.infer<typeof orderSchema>;
