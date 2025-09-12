

import { useRouteError } from "react-router"
import { useNavigate } from "react-router"

const ErrorPage = () => {

    const error = useRouteError()
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex-center-all'>
        <div className='flex-center-all flex-col gap-3 max-w-4xl'>
            <img src="/logo.png" className="max-w-[300px]" alt="" />
            <h2>Opps! Something unexpected happened.</h2>
            <p className="text-base-color">{error?.message || "Please try again as we have no idea of what happened. Contact the site owner if error persists"}</p>
            <btn className="btn flex-center-all" onClick={() => navigate(-1)}>Go back</btn>
        </div>
    </div>
  )
}

export default ErrorPage