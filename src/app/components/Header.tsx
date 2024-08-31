import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 z-10 w-full">
      <header className="bg-[#421f80] text-white p-4">
        <nav>
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/products/add" className="mr-4">
            Add Product
          </a>
        </nav>
      </header>
    </nav>
  );
};

export default Header;
