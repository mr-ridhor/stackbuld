"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/schema/types/productType";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductEditDialog from "./ProductEditDialog";

const ProductDetailPage: React.FC<{ params: { id: string } }> = ({
  params,
}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const products = JSON.parse(localStorage.getItem("products") || "[]");
        const foundProduct = products.find((p: Product) => p.id === params.id);
        if (!foundProduct) {
          setError("Product not found");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        setError("An error occurred while fetching the product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleSave = (updatedProduct: Product) => {
    const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const updatedProducts = savedProducts.map((p: Product) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProduct(updatedProduct);
  };

  const handleDelete = () => {
    const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const updatedProducts = savedProducts.filter(
      (p: Product) => p.id !== params.id
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    router.push("/"); // Navigate back to the product list
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500">{error}</p>
        <Button onClick={() => router.push("/")} className="mt-4">
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {product && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {product.name}
                </h1>
                <p className="text-gray-600 mt-4">{product.description}</p>
                <p className="text-xl font-semibold text-gray-900 mt-6">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800">Reviews</h2>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`${
                        index < 4 ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">(4/5)</span>
                </div>
                <p className="mt-2 text-gray-600">Based on 10 reviews</p>
              </div>
            </div>
          </div>

          <div className="p-6 border-t flex ">
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800">
                Additional Information
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <span className="font-semibold">Category:</span>
                  {product.category}
                </li>
                <li>
                  <span className="font-semibold">Availability:</span> In Stock
                </li>
                <li>
                  <span className="font-semibold">Shipping:</span> Free
                  Worldwide Shipping
                </li>
                <li>
                  <span className="font-semibold">Return Policy:</span> 30-Day
                  Money-Back Guarantee
                </li>
              </ul>
            </div>
            <div className="flex justify-betwen  gap-x-2 p-6">
              <ProductEditDialog initialProduct={product} onSave={handleSave} />
              <Button variant="destructive" className="" onClick={handleDelete}>
                Delete Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
