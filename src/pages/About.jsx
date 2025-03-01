import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Globe, Newspaper, Network } from "lucide-react";


const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto px-6 py-12 font-mono">
      <h2 className="text-2xl font-semibold mb-2 flex justify-center"><img src="public/Logo (1).svg" alt="img" /></h2>
      <h1 className="text-3xl font-bold text-center mb-6">About News Aggregator</h1>
      <p className="text-lg text-center mb-8">
        <strong>News Aggregator</strong> is a news platform designed to gather information from various reliable sources in one place.
        With a modern and accessible design, we ensure that you have access to the latest news in real time, organized into
        categories such as sports, technology, politics, entertainment, and more.
      </p>
      
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-2 flex justify-center"><Globe size={50} className="text-black" /></h2>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Our Vision</h2>
          <p>
            To be the leading news aggregation platform, offering a complete, personalized, and accessible information
            experience for all users.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-2 flex justify-center"><Newspaper size={50} className="text-black" /></h2>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Our Mission</h2>
          <p>
            To provide up-to-date news quickly and efficiently, ensuring credibility, organization, and an intuitive
            navigation experience so users are always well-informed.
          </p>
        </div>  

        <div className="mt-20">

          <h2 className="text-2xl font-semibold mb-2 flex justify-center"><Network size={50} className="text-black" /></h2>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Who We Are</h2>
          <p>
            We are a team passionate about technology and information, committed to connecting people to what really matters.
            We believe in the power of information and continuously work to make <strong>News Aggregator</strong> the best
            online news tracking tool.
          </p>
        </div> 

      </div>
    </div>
  );
};

export default About;
