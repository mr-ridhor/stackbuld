"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/schema/types/productType";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TruncateText } from "@/lib/TrucateText";
import Link from "next/link";

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onDelete, products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setLocalProducts(products);
      setLoading(false);
    } catch (err) {
      setError("An error occurred while fetching products.");
      setLoading(false);
    }
  }, [products]);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSave = (product: Product) => {
    const updatedProducts = localProducts.map((p) =>
      p.id === product.id ? product : p
    );
    setLocalProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-center">{error}</p>;
  }

  return (
    <div className="">
      <div className="flex ">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1 space-y-1 p-2">
            {localProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {localProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="flex flex-col h-[250px] w-full border rounded-lg shadow-md hover:shadow-lg"
                  >
                    <CardContent className="flex-1 flex items-center h-[70%] justify-center">
                      {product.imageUrl && (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-24 object-contain"
                        />
                      )}
                    </CardContent>
                    <CardFooter className="p-2 border-t mt-auto flex flex-col items-start">
                      <div className="font-medium">
                        <Link
                          href={`/products/${product.id}`}
                          className="hover:underline decoration-gray-700 decoration-2"
                        >
                          {TruncateText(`${product.name}`, 10)}
                        </Link>
                      </div>
                      <div className="font-medium">
                        ${product.price.toFixed(2)}
                      </div>
                      <div className="">{product.category}</div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
