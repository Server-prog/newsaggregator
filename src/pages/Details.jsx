import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p className="text-center text-red-500">No news found.</p>;
  }

  return (
    <div className={`p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 mb-4"
      >
        <ChevronLeft size={20} /> back
      </button>

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      <div className="flex justify-between">
      <p className="text-black text-sm mt-2">
        <strong>Fonte:</strong> {article.source.name} | <strong>Data:</strong>{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {article.author && (
        <p className="text-black text-sm mt-1">
          <strong>Autor:</strong> {article.author}
        </p>
      )}
      </div>
      
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="Imagem da notícia"
          className="w-full max-h-[500px] object-cover border border-black shadow-lg"
        />
      )}

      

      <p className="mt-4 text-lg">{article.description} <span className="cursor-pointer text-blue-700 font-semibold" > <a href={article.url}> see more</a></span> </p>

      {article.content && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Complete Content</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">{article.content}</p>
        </div>
      )}

      <hr  className="mt-8 border border-black"/>
      <div className="flex justify-between items-center gap-2 mt-8">
        <h2 className="font-bold ">Thanks For Read</h2>
      </div>
    </div>
    
    </div>
  );
};

export default About;