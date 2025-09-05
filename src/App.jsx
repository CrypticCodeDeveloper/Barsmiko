import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import BaseLayout from "./layouts/base-layout";
import HomePage from "./pages/home-page";
import AboutUsPage from "./pages/about-us-page";
import ServicesPage from "./pages/services-page";
import ProductsPage from "./pages/products-page";
import ContactPage from "./pages/contact-page";
import BlogsPage from "./pages/blogs-page";
import BlogPostPage from "./pages/blog-post-page";
import AuthLayout from "./layouts/auth-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogsPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Route>
    <Route path="/admin" element={<AuthLayout />}>
      <Route path="/admin/login" element={<div>Admin page auth</div>} />
    </Route>
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

