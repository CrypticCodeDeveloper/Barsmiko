
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <div>
      <div>Hello world</div>
      <Outlet />
    </div>
  )
}

export default BaseLayout