import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Globe, Newspaper, Network } from "lucide-react";
import { motion } from "motion/react";


const About = () => {
  const { theme } = useContext(ThemeContext);

  return (

    <div className={`${theme === "dark" ? "text-white" : "border-b border-black"}`}>
      <motion.ul animate={{ rotate: 360 }} />
      <div className="max-w-4xl mx-auto px-6 py-12 font-mono">
        <h2 className="text-2xl font-semibold mb-2 flex justify-center"><img src="public/Logo (1).svg" alt="img" /></h2>
        <h1 className="text-3xl font-bold text-center mb-6">About News Aggregator</h1>
        <p className="text-lg text-center mb-8">
          <strong>News Aggregator</strong> is a news platform designed to gather information from various reliable sources in one place.
          With a modern and accessible design, we ensure that you have access to the latest news in real time, organized into
          categories such as sports, technology, politics, entertainment, and more.
        </p>
      
        <div className="mt-20 px-4">
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">
            <Globe size={50} />
          </h2>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Our Vision</h2>
          <p className="text-center text-lg max-w-2xl mx-auto">
            To be the leading news aggregation platform, offering a complete, personalized, and accessible information experience for all users.
          </p>

          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            We aim to revolutionize the way people consume news by providing an intuitive, seamless, and highly customizable platform.  
            Our goal is to make sure everyone, regardless of their background, has access to diverse and credible information in real time.
          </p>

          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            By leveraging cutting-edge technology and AI-driven recommendations, we empower users to stay informed on topics that matter most to them.  
            Our commitment to accuracy, inclusivity, and innovation ensures that we continue to shape the future of digital news consumption.
          </p>
        </div>


        <div className="mt-20 px-4">
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">
            <Newspaper size={50} />
          </h2>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Our Mission</h2>
  
          <p className="text-center text-lg max-w-2xl mx-auto">
            To provide up-to-date news quickly and efficiently, ensuring credibility, organization, and an intuitive navigation experience so users are always well-informed.
          </p>

          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            We strive to create a seamless and reliable news aggregation platform that empowers users with real-time information from trusted sources.  
            By combining technology and user-friendly design, we aim to bridge the gap between fast news delivery and content accuracy.
          </p>

          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            Our mission is to eliminate misinformation by providing a space where users can access news that is verified, unbiased, and well-structured.  
            We believe that staying informed should be effortless, engaging, and accessible to everyone.
          </p>
        </div>

        <div className="mt-20 px-4">
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">
            <Network size={50} />
          </h2>
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Who We Are</h2>
  
          <p className="text-center text-lg max-w-2xl mx-auto">
            We are a team passionate about technology and information, committed to connecting people to what really matters.
            We believe in the power of information and continuously work to make <strong>News Aggregator</strong> the best 
            online news tracking tool.
          </p>

          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            Our team consists of experienced professionals in journalism, software development, and data analysis, all working together 
            to deliver accurate, real-time, and personalized news experiences. We combine human expertise with AI-powered solutions to 
            bring you the most relevant and trustworthy information.
          </p>

          <p className="text-center text-lg mt-4 max-w-2xl mx-auto">
            At <strong>News Aggregator</strong>, our mission goes beyond just providing news. We aim to create a community where people 
            can access diverse perspectives, stay informed, and engage in meaningful discussions about the world around them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
