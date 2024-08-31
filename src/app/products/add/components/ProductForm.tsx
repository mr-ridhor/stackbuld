"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Product } from "@/lib/schema/types/productType";
import { productSchema } from "@/lib/schema/zod-schema/productSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ImageUploader from "@/app/components/ImageUploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ProductFormProps {
  initialProduct?: Product;
  onSave: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialProduct,
  onSave,
}) => {
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: initialProduct || {
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
      category: "",
    },
  });

  const onSubmit = (data: Product) => {
    onSave(data);
  };

  return (
    <div className="h-full py-6 no-scrollbar overflow-y-auto flex items-cente justify-center w-full ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-[60%] flex items-centr justify-cnter h-full flex-col "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter product name"
                    {...field}
                    className="border focus:ring-0 focus:border-0 focus:outline-none focus-visible:ring-1 p-2 w-full"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter product description"
                    {...field}
                    className="border p-2 w-full focus:ring-0 focus:border-0 focus:outline-none focus-visible:ring-1"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter product price"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    className="border p-2 w-full focus:ring-0 focus:border-0 focus:outline-none focus-visible:ring-1"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <ImageUploader
                    value={field.value}
                    onChange={(imageUrl) => field.onChange(imageUrl)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="border p-2 w-full rounded focus:ring-0 focus:border-0 focus:outline-none focus-visible:ring-1"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home">Home</option>
                    <option value="Books">Books</option>
                    <option value="Sports">Sports</option>
                    {/* Add more categories as needed */}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-1 text-white p-2 rounded">
            Save Product
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
