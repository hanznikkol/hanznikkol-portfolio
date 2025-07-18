import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import ContactForm from "./subcomponents/ContactForm";

function Contact() {
  return (
    <div id="contacts" className="min-h-screen lg:h-screen w-full flex flex-col p-6 lg:flex-row bg-midnight-black lg:p-24 gap-6 lg:gap-2">
      <div className="w-full h-full flex-1 flex flex-col justify-center items-center lg:items-start px-8 text-spectral-white">
        <h1 className="text-4xl lg:text-7xl font-bold mb-4">Contact Me</h1>
        <p className="mb-2">📍 Lucena City, Philippines</p>
        <p className="mb-2"><a></a>📧 hanznikkolmaas@gmail.com</p>
        
        <p className="mb-2">📱 +63 961 280 2909</p>

        {/* Social Media Icons */}
        <div className="flex gap-5 mt-6 text-2xl">
          <a href="https://www.facebook.com/hanznikkolbabatmaas/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition duration-300 hover:scale-105" />
          </a>
          <a href="https://www.instagram.com/iamnikkol_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400 transition duration-300 hover:scale-105" />
          </a>
          <a href="https://www.tiktok.com/@iamnikkol_" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-cyan-400 transition duration-300  hover:scale-105" />
          </a>
          <a href="https://linkedin.com/in/hanznikkol" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition duration-300  hover:scale-105" />
          </a>
          <a href="https://github.com/hanznikkol" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-orange-400 transition duration-300  hover:scale-105" />
          </a>
        </div>

        {/* Resume/CV */}
        <a
          href="https://drive.google.com/file/d/1yyXr3w_Y71Nb2zkUJczCJahFetWSjBRK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-spectral-white text-spectral-white font-bold hover:bg-spectral-white hover:text-midnight-black hover:scale-110 transition duration-300 rounded-lg"
        >
          <FaDownload/>
          View My CV
        </a>
      </div>

      <div className="flex-1 flex w-full h-full justify-center items-center">
        <ContactForm/>
      </div>
    </div> 
  );
}

export default Contact;
