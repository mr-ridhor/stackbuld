"use client";

import React, { useEffect, useState } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";
import { Product } from "@/lib/schema/types/productType";

const HomePage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setFilteredProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleFilter = (category: string, maxPrice: number) => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      const products: Product[] = JSON.parse(savedProducts);
      const filtered = products.filter(
        (product) =>
          (category ? product.category === category : true) &&
          (maxPrice ? product.price <= maxPrice : true)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleDelete = (id: string) => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      const products: Product[] = JSON.parse(savedProducts);
      const updatedProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setFilteredProducts(updatedProducts);
    }
  };

  return (
    <div className="h-full w-full flex">
      <div className="w-40 lg:flex hidden border-r bg-white">
        <ProductFilter onFilter={handleFilter} />
      </div>
      <div className="flex-1">
        <ProductList onDelete={handleDelete} products={filteredProducts} />
      </div>
    </div>
  );
};

export default HomePage;
