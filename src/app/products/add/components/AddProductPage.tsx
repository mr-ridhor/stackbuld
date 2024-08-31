"use client";
import { Product } from "@/lib/schema/types/productType";
import React from "react";
import ProductForm from "./ProductForm";
import { v4 as uuidv4 } from "uuid";

const AddProductPage: React.FC = () => {
  const handleSave = (newProduct: Product) => {
    const savedProducts = localStorage.getItem("products");
    const products: Product[] = savedProducts ? JSON.parse(savedProducts) : [];
    newProduct.id = uuidv4();
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.href = "/";
  };
  return (
    <div className="h-full no-scrollbar overflow-y-auto my-4">
      <ProductForm onSave={handleSave} />
    </div>
  );
};

export default AddProductPage;
