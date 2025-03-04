import companyLogo from "../assets/brandLogo.jpg"
import { Link } from 'react-router-dom'


export function Home(){
    return <>
        <img
          src={companyLogo}
          alt="Logo"
          className="mx-auto"
        />
      <div className="mt-4">
        <Link to="/dashboard">
          <div className="w-1/4 bg-blue-500 text-white p-4 text-center rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            Go to Dashboard
          </div>
        </Link>
      </div>
    </>
}