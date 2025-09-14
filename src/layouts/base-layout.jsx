
import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const BaseLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default BaseLayout