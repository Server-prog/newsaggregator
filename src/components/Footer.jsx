import { useContext } from "react"; // Adicione esta linha
import { ArrowRight } from "lucide-react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`p-4 ${theme === "dark" ? " text-white" : "text-white"}`}>
            <footer className=" text-black py-8 border-t border-black text-center">
                <h2 className="text-2xl font-bold mb-4">Newsletter</h2>

                <div className="relative w-full">
                    <div className="flex justify-center items-center gap-2">
                        <input
                            type="email"
                            placeholder="Email Address..."
                            className="border border-black px-4 py-2 rounded-md outline-none w-72"
                        />
                        <button className="p-2 border border-black rounded-md">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-4 text-gray-600">
                    <a href="#" className="hover:underline">LinkedIn</a>
                    <a href="https://github.com/Server-prog?tab=repositories" className="hover:underline">GitHub</a>
                    <a href="#" className="hover:underline">Instagram</a>
                </div>

                <p className="text-sm mt-4 text-gray-500">
                    &copy; {new Date().getFullYear()} João Tambue. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
