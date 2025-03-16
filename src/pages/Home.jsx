import companyLogo from "../assets/brandLogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  text-gray-900 dark:text-white">
      <img
        src={companyLogo}
        alt="Logo"
        className="w-40 md:w-52 mt-4 mb-6 mx-auto bg-transparent"
      />
      
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Food Suraksha 24X7</h1>
      <p className="text-lg mb-8 text-black ">Empowering FSSAI Compliance & Kitchen Safety</p>

      <button
      onClick={() => navigate("/signin")}
      className="w-1/4  p-2 bg-green-400 rounded-xl text-white font-semibold text-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-white"
    >
      Sign In
    </button>
    <br/>
    <button
      onClick={() => navigate("/signup")}
      className=" w-1/4 p-2 bg-green-400 rounded-xl text-white font-semibold text-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-white"
    >
      Sign Up
    </button>
    <br/>

    <button onClick={() => navigate("/ministerdashboard")} className="text-black" >  Minister </button>
    <br/>
    </div>
  );
}


