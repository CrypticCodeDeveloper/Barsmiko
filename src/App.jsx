import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/auth-context";
import AuthProtecter from "./utils/auth-protecter";

import BaseLayout from "./layouts/base-layout";
import AuthLayout from "./layouts/auth-layout";

import HomePage from "./pages/home/index"
import AboutUsPage from "./pages/about-us/index"
import ServicesPage from "./pages/services-page/index"
import ProductsPage from "./pages/products/index"
import ContactPage from "./pages/contact-us/index"
import Blogs from "./pages/blogs/index"
import Blog from "./pages/blog/index"
import AdminPage from "./pages/admin/index"
import AdminLoginPage from "./pages/admin/login"

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
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
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
