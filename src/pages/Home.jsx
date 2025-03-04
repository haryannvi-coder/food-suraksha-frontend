import companyLogo from "../assets/brandLogo.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <img
        src={companyLogo}
        alt="Logo"
        className="w-40 md:w-52 mb-8 drop-shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to Food Safety Dashboard</h1>
      <p className="text-lg mb-8">Empowering FSSAI Compliance & Kitchen Safety</p>
      <Link to="/dashboard">
        <button className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105 focus:outline-none">
          Go to Dashboard →
        </button>
      </Link>
    </div>
  );
}


