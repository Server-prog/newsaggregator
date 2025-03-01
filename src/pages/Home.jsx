import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [showFilters, setShowFilters] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const navigate = useNavigate();

  const API_KEY = "f50e090d1bf7437c9e9a93c86be4a532";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;

  const fetchNews = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setArticles(data.articles);
      setFilteredArticles(data.articles);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 300000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filtered = articles;
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter(article => article.category === category);
    }
    if (source) {
      filtered = filtered.filter(article => article.source.name === source);
    }
    if (date) {
      filtered = filtered.filter(article => article.publishedAt.startsWith(date));
    }
    setFilteredArticles(filtered);
  }, [searchTerm, category, source, date, articles]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className={`p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#f2f2f2] text-black"}`}>
      <div className="container mx-auto max-w-5xl py-4 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl"><img src="public/Articles.png" alt="img" className="h-[29px] w-[188px]" /></h1>
        <button className="flex justify-between border px-4 py-2" onClick={() => setShowFilters(!showFilters)}>
          <img src="public/Frame.svg" alt="" /> {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="container mx-auto max-w-5xl mt-4 p-4 grid grid-cols-4 gap-4">
          <div className="relative w-full">
            <input type="text" placeholder="Search..." className="border border-gray-400 px-4 py-2 w-full rounded-md pr-10" onChange={(e) => setSearchTerm(e.target.value)} />
            <span className="absolute top-2 right-3 text-gray-500">
              <Search size={20} />
            </span>
          </div>
          <select className="border p-2" onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
          </select>
          <input type="text" placeholder="Source..." className="border p-2" onChange={(e) => setSource(e.target.value)} />
          <input type="date" className="border p-2" onChange={(e) => setDate(e.target.value)} />
        </div>
      )}

      <div className="container mx-auto max-w-5xl grid grid-cols-3 gap-6 mt-6">
        {currentArticles.map((article, index) => (
          <div key={index} className="border overflow-hidden shadow-lg">
            <div className="relative w-full">
              <img src={article.urlToImage || "/placeholder.jpg"} alt="Notícia" className="w-full object-cover border-2 border-black h-[315px]" />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{article.title}</h3>

              <hr className="border-t border border-black my-4" />
              <div className="flex justify-between mt-4">
                <p className="text-sm text-gray-500">{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                <button 
                  className="text-blue-500 block" 
                  onClick={() => navigate("/details", { state: { article } })}
                >
                  Leia mais →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#f2f2f2] text-black"}`}>
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} className="p-2 border hover:bg-gray-300">
            <ChevronLeft size={24} />
          </button>
          <span className="text-lg">{currentPage}</span>
          <button onClick={() => setCurrentPage(prev => (indexOfLastArticle < filteredArticles.length ? prev + 1 : prev))} className="p-2 border hover:bg-gray-300">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;