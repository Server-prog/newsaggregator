import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Sun, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost/News_Agregator_backend/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        setMessage("Registro bem-sucedido! Faça login para continuar.");
        setUser({ name: "", email: "", password: "" }); // Limpa os campos
        setTimeout(() => setIsSignUpOpen(false), 2000); // Fecha o modal após 2s
      } else {
        setMessage(data.error || "Erro ao registrar");
      }
    } catch  {
      setMessage("Erro ao conectar com o servidor");
    }
  };
  

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/News_Aggregator_backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch {
      setMessage("Erro ao conectar com o servidor");
    }
  };

  return (
    <div>
      <header className={`${theme === "dark" ? "text-white border-b" : " border-b border-black"}`}>
        <div className="container mx-auto w-[1154px] flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">
            <img src="/Logo (1).svg" alt="Logo" />
          </h1>
          <nav className={`flex space-x-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About us</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSignInOpen(true)} className="text-gray-500 hover:text-black">Sign In</button>
            <button onClick={() => setIsSignUpOpen(true)} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Sign Up</button>
            <button onClick={toggleTheme} className="px-4 py-2 rounded">
              <Sun className={`${theme === "dark" ? "text-white" : "text-gray-700"} w-6 h-6`} />
            </button>
          </div>
        </div>
      </header>

      {(isSignInOpen || isSignUpOpen) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          {isSignInOpen && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[413px] text-center relative">
              <div className="mt-6">
                <h2 className="text-2xl text-black font-bold mb-2 flex justify-normal">Sign In</h2>
                <p className="flex justify-normal text-gray-400 mb-4">Malesuada egestas nunc vestibulum</p>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="mt-10">
                <h1 className="flex justify-normal font-semibold text-[#1C1C1C]">Your email</h1>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border border-[#1C1C1C] px-4 py-2 w-full mb-2" />
                <h1 className="flex justify-normal font-semibold text-[#1C1C1C]">Your password</h1>
                <div className="relative full">
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required className="border border-[#1C1C1C] px-4 py-2 w-full mb-2" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 -mt-2 right-3 flex items-center text-gray-500 hover:text-black">{showPassword ? <EyeOff /> : <Eye />}</button>
                </div>
                <button type="submit" className="bg-black border rounded-lg mt-4 text-white px-4 py-2 w-full h-[51px]">Sign in</button>
                </div>
              </form>
            </div>
          )}

          {isSignUpOpen && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] text-center relative">
              <div className="mt-6">
                <h2 className="text-2xl text-black font-bold mb-4 flex justify-normal">Sign Up</h2>
                <p className="flex justify-normal text-gray-400 mb-4">Malesuada egestas nunc vestibulum</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-10">
                <h1 className="flex justify-normal font-semibold text-[#1C1C1C]">Your Name</h1>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="border border-[#1C1C1C] px-4 py-2 w-full mb-2" />
                <h1 className="flex justify-normal font-semibold text-[#1C1C1C]">Your Email</h1>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border border-[#1C1C1C] px-4 py-2 w-full mb-2" />
                <h1 className="flex justify-normal font-semibold text-[#1C1C1C]">Your Password</h1>
                <div className="relative full">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required className="border border-[#1C1C1C] px-4 py-2 w-full mb-2" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 -mt-2 right-3 flex items-center text-gray-500 hover:text-black">{showPassword ? <EyeOff /> : <Eye />}</button>
                </div>
                </div>
                <button type="submit" className="bg-black mt-4 rounded-lg text-white px-4 py-2 w-full">Sign up</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
