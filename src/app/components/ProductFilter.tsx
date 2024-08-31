"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface ProductFilterProps {
  onFilter: (category: string, maxPrice: number) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const handleFilter = () => {
    onFilter(category, maxPrice || 0);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block  mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
          <option value="Books">Books</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block  mb-2">Max Price</label>
        <input
          type="number"
          value={maxPrice || ""}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Enter max price"
          className="w-full p-2 border rounded text-sm"
        />
      </div>
      <Button onClick={handleFilter} className="w-full p-2  text-white rounded">
        Apply Filters
      </Button>
    </div>
  );
};

export default ProductFilter;
