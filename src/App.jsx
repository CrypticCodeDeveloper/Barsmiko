import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import BaseLayout from "./layouts/base-layout";
import HomePage from "./pages/home-page";
import AboutUsPage from "./pages/about-us-page";
import ServicesPage from "./pages/services-page";
import ProductsPage from "./pages/products-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

