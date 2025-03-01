import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Sun, Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div>
      <header className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#f2f2f2] border-b border-gray-300"}`}>
        <div className="container mx-auto w-[1154px] flex justify-between items-center py-4 px-6">
          
          <div>
            <h1 className="text-xl font-bold">
              <img src="/Logo (1).svg" alt="Logo" />
            </h1>
          </div>

          <nav className={`flex space-x-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About us</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSignInOpen(true)}
              className={`${theme === "dark" ? "text-white hover:text-gray-300" : "text-gray-500 hover:text-black"}`}>
              Sign In
            </button>

            <button 
              onClick={() => setIsSignUpOpen(true)}
              className={`${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-black text-white hover:bg-gray-800"} px-4 py-2 rounded-md`}>
              Sign Up
            </button>
            
            <button onClick={toggleTheme} className="px-4 py-2 rounded">
              <Sun className={`${theme === "dark" ? "text-white" : "text-gray-700"} w-6 h-6`} />
            </button>
          </div>
        </div>
      </header>

      {/* Fundo escuro para modais */}
      {(isSignInOpen || isSignUpOpen) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal Sign In */}
          {isSignInOpen && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                <button 
                  onClick={() => setIsSignInOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  X
                </button>
              </div>
              <p className="text-gray-500">Malesuada egestas nunc vestibulum</p>

              <div className="mt-7">
                <p className="font-semibold">Your email</p>
                <div className="relative w-full">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="border border-black px-4 py-2 w-full mb-2 pr-10"
                  />
                  <Mail className="absolute right-3 top-2 text-gray-500" size={20} />
                </div>

                <p className="font-semibold">Password</p>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border border-black px-4 py-2 w-full mb-4 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button className="bg-black text-white px-4 py-2 rounded-md w-full hover:bg-gray-800">
                Sign in
              </button>
            </div>
          )}

          {/* Modal Sign Up */}
          {isSignUpOpen && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <button 
                  onClick={() => setIsSignUpOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  X
                </button>
              </div>
              <p className="text-gray-500">Create an account to get started</p>

              <div className="mt-7">
                <p className="font-semibold">Your email</p>
                <div className="relative w-full">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="border border-black px-4 py-2 w-full mb-2 pr-10"
                  />
                  <Mail className="absolute right-3 top-2 text-gray-500" size={20} />
                </div>

                <p className="font-semibold">Password</p>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border border-black px-4 py-2 w-full mb-2 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <p className="font-semibold">Confirm Password</p>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="border border-black px-4 py-2 w-full mb-4 pr-10"
                  />
                </div>
              </div>

              <button className="bg-black text-white px-4 py-2 rounded-md w-full hover:bg-gray-800">
                Sign up
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
