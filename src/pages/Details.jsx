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
    return <p className="text-center text-red-500">Nenhuma notícia encontrada.</p>;
  }

  return (
    <div className={`p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 mb-4"
      >
        <ChevronLeft size={20} /> Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="Imagem da notícia"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
        />
      )}

      <p className="text-gray-600 text-sm mt-2">
        <strong>Fonte:</strong> {article.source.name} | <strong>Data:</strong>{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {article.author && (
        <p className="text-gray-500 text-sm mt-1">
          <strong>Autor:</strong> {article.author}
        </p>
      )}

      <p className="mt-4 text-lg">{article.description}</p>

      {article.content && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Conteúdo Completo</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">{article.content}</p>
        </div>
      )}

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Ler no site original
      </a>
    </div>
    </div>
  );
};

export default About;