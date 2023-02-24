import { Link, useRouteError } from "react-router-dom"


const NotFound = () => {

  const error = useRouteError()

  return (
    <div className="h-screen w-2/3 m-auto text-center mt-8 text-white bg-gradient-to-b from-emerald-600  to-emerald-900">
        <h2 className="text-2xl font-semibold mb-8">404</h2>
        <p className="mb-8 text-lg font-medium">Page not Found</p>
        <p className="mb-8 text-lg font-medium">
            {error.statusText || error.message}  
        </p>
        <Link className='border-2 p-1 shadow-md shadow-black rounded-lg hover:bg-emerald-800 hover:shadow' to='/' >Volver al Home</Link>
    </div>
  )
}

export default NotFound