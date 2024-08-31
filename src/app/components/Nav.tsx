import React from "react";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10">
      <header className="bg-gray-800 text-white p-4">
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

export default Nav;
