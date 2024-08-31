import { z, ZodType } from "zod";
import { Product } from "../types/productType";

export const productSchema: ZodType<Product> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be positive"),
  imageUrl: z.string().url("Invalid URL").optional(),
  category: z.string().min(1, "Description is required"),
});
