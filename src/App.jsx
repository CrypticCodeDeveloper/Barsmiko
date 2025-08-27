import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import BaseLayout from "./layouts/base-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<div>Home</div>} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

