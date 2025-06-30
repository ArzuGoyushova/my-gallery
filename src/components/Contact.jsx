import { FaEnvelope, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center py-18 px-6 text-white shrink-0">
 <h1 className="text-3xl font-bold text-yellow-400 mb-10">📬 Contact Me</h1>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center md:items-start bg-neutral-900 rounded-2xl shadow-lg p-8 border border-yellow-500">
        
        {/* Left Card */}
        <div className="w-full md:w-1/3 bg-neutral-800 p-6 rounded-xl text-center border border-yellow-400 shadow-md">
          <img
            src="/src/assets/avatar.png" // Replace with your own avatar or logo
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border border-yellow-300"
          />
          <h2 className="text-xl font-bold text-yellow-300 mb-1">Arzu Goyushova</h2>
          <p className="text-sm text-gray-400">Digital Marketing Specialist</p>
          
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-2/3">
         
          <p className="text-gray-300 mb-6 leading-relaxed text-wrap">
            Want to discuss a project, partnership, or just share an idea? Feel free to reach out!
            I'm always open to meaningful collaboration and fun conversations.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 group">
              <FaEnvelope className="text-yellow-300 text-xl group-hover:scale-110 transition" />
              <a
                href="mailto:your.email@example.com"
                className="text-sm text-blue-400 group-hover:underline"
              >
                arzugoyushova16@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <FaLinkedin className="text-yellow-300 text-xl group-hover:scale-110 transition" />
              <a
                href="https://www.linkedin.com/in/arzugoyushova/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 group-hover:underline"
              >
                linkedin.com/in/arzugoyushova
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <FaInstagram className="text-yellow-300 text-xl group-hover:scale-110 transition" />
              <a
                href="https://www.instagram.com/arzuthv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 group-hover:underline"
              >
                instagram.com/arzuthv
              </a>
            </div>

             <div className="flex items-center gap-4 group">
              <FaFileAlt className="text-yellow-300 text-xl group-hover:scale-110 transition" />
           <a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-blue-400 group-hover:underline"
>
  Check my CV
</a>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic mt-10">
            Let’s make something impactful together 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
