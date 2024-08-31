// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { Product } from "@/lib/schema/types/productType";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import ProductForm from "../add/components/ProductForm";
// // import ProductForm from "@/app/components/ProductForm";

// interface ProductEditDialogProps {
//   initialProduct: Product;
//   onSave: (product: Product) => void;
// }

// const ProductEditDialog: React.FC<ProductEditDialogProps> = ({
//   initialProduct,
//   onSave,
// }) => {
//   const router = useRouter();

//   const handleSave = (updatedProduct: Product) => {
//     onSave(updatedProduct);
//     router.refresh();
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button>Edit Product</Button>
//       </DialogTrigger>
//       <DialogContent className="h-[500px] w-[100%]">
//         <DialogHeader>
//           <DialogTitle>Edit Product</DialogTitle>
//           <DialogDescription>
//             Update the details of your product below.
//           </DialogDescription>
//         </DialogHeader>
//         <ProductForm initialProduct={initialProduct} onSave={handleSave} />
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ProductEditDialog;
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/schema/types/productType";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProductForm from "../add/components/ProductForm";
// import ProductForm from "@/app/components/ProductForm";

interface ProductEditDialogProps {
  initialProduct: Product;
  onSave: (product: Product) => void;
}

const ProductEditDialog: React.FC<ProductEditDialogProps> = ({
  initialProduct,
  onSave,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSave = (updatedProduct: Product) => {
    onSave(updatedProduct);
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-green-600 text-white hover:bg-green-400"
          onClick={() => setOpen(true)}
        >
          Edit Product
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[500px] w-full">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Update the details of your product below.
          </DialogDescription>
        </DialogHeader>
        <ProductForm initialProduct={initialProduct} onSave={handleSave} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductEditDialog;
