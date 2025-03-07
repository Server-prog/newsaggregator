import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  },);

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
    <div className={`p-4 ${theme === "dark" ? "text-white" : " text-black"}`}>
      <div className="container mx-auto max-w-5xl py-4 px-6 flex justify-between items-center">
        <h1 className="font-mochiy font-extrabold text-xl">Articles</h1>
        <button className="flex justify-between border border-black px-4 py-2" onClick={() => setShowFilters(!showFilters)}>
          <img src="public/Frame.svg" alt="" /> {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="container flex flex-wrap justify-center md:justify-between mx-auto max-w-5xl mt-4 p-4 gap-4">
        <div className="relative w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border border-black px-4 py-2 pr-10 w-full sm:w-[200px] md:w-[300px] h-[52px]" 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <span className="absolute top-2 right-3 text-gray-500">
            <Search size={20} className="text-black -ml-10 mt-2" />
          </span>
        </div>
        
        <select 
          className="border border-black p-2 w-full sm:w-[140px] ml-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Business">Business</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Science/Tech">Science/Tech</option>
          <option value="World">World</option>
        </select>
      
        <input 
          type="text" 
          placeholder="Source..." 
          className="border border-black p-2 w-full sm:w-[170px]" 
          onChange={(e) => setSource(e.target.value)} 
        />
      
        <input 
          type="date"
          className="border border-black p-2 w-full sm:w-[170px]" 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>      
      )}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
      <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentArticles.map((article, index) => (
          <div key={index}>
            <div className="relative w-full">
              <img 
                src={article.urlToImage || "/placeholder.jpg"} 
                alt="News" 
                className="w-full object-cover border-2 border-black h-auto min-h-[200px] max-h-[315px]" 
              />
            </div>

          <div className="p-4">
            <h3 className="font-semibold max-w-full">{article.title}</h3>

            <hr className="border-t border w-full border-black my-4" />
            <div className="flex justify-between mt-1">
              <p className="text-sm text-gray-500">
                {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <button className="text-blue-500 block"onClick={() => navigate("/details", { state: { article } })}>
                more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>


      <div className={`p-4 ${theme === "dark" ? "text-white" : " text-black"}`}>
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} className="p-2 border">
            <ChevronLeft size={24} />
          </button>
          <span className="text-lg">{currentPage}</span>
          <button onClick={() => setCurrentPage(prev => (indexOfLastArticle < filteredArticles.length ? prev + 1 : prev))} className="p-2 border">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;