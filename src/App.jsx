import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import BaseLayout from "./layouts/base-layout";
import HomePage from "./pages/home-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

