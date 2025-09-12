import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import BaseLayout from "./layouts/base-layout";
import HomePage from "./pages/home-page";
import AboutUsPage from "./pages/about-us-page";
import ServicesPage from "./pages/services-page";
import ProductsPage from "./pages/products-page";
import ContactPage from "./pages/contact-page";
import BlogsPage from "./pages/blogs-page";
import BlogPostPage from "./pages/blog-post-page";
import AuthLayout from "./layouts/auth-layout";
import AdminLoginPage from "./pages/admin-login-page";

import AuthProvider from "./contexts/auth-context";
import { Toaster } from "react-hot-toast";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AdminPage from "./pages/admin-page";

import AuthProtecter from "./utils/auth-protecter";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BaseLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Route>
      <Route path="/admin" element={<AuthLayout />} errorElement={<ErrorPage />}>
        <Route index element={<AuthProtecter><AdminPage /></AuthProtecter>} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Route>
    </>
  )
);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
