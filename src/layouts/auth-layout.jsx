
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Outlet />

    </div>
  )
}

export default AuthLayout