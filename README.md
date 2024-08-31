# Product Management System

This project is a product management system built using React, TypeScript, Next.js, and Zod for form validation. It features a product detail page where users can view product information, edit product details, and manage the product catalog.

# Features

Product Listing: Display a list of products with details like name, description, price, and image.
Product Detail Page: View detailed information about each product.
Edit Product: Edit existing product details using a dialog with a form.
Form Validation: Zod schema validation for product forms.
Image Upload: Support for image uploads within the product form.
Requirements
Before you begin, ensure you have met the following requirements:

npm or Yarn: Package manager for installing dependencies.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/mr-ridhor/stackbuld.git
cd product-management-system
Install dependencies:

bash
Copy code

# Using npm

npm install

# Or using Yarn

yarn install
Run the development server:

bash
Copy code
npm run dev
Navigate to http://localhost:3000 in your browser to see the application in action.

# Project Structure

/components: Contains reusable UI components such as forms, buttons, and dialogs.
/lib/schema: Contains Zod schemas and TypeScript types for form validation and product data.
/pages: Contains Next.js pages for routing.
/styles: Contains global and component-specific styles.
Usage
Viewing Products
Navigate to the home page to see the list of products.
Click on any product to view its detailed information.
Editing a Product
On the product detail page, click the Edit Product button to open a dialog.
Modify the product details in the form.
Click Save Product to save changes, and the dialog will close automatically.
Dependencies
React: A JavaScript library for building user interfaces.
Next.js: A React framework for server-side rendering and static site generation.
TypeScript: A superset of JavaScript that adds static types.
Zod: A TypeScript-first schema declaration and validation library.
Lucide-react: A library for SVG icons.
React Hook Form: A library for managing form state in React.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-branch.
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details
