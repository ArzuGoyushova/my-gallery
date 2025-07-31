import { FaEnvelope, FaLinkedin, FaRegStickyNote, FaFileAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact"  className="min-h-screen min-w-screen flex flex-col items-center py-18 px-6 text-white shrink-0">
 <h1 className="md:text-[3.6rem] text-[2rem] font-bold text-yellow-400 mb-10">📬{t('contact.title')}</h1>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center md:items-start bg-neutral-900 rounded-2xl shadow-lg p-8 border border-yellow-500">
        
        {/* Left Card */}
        <div className="w-full md:w-1/3 bg-neutral-800 p-6 rounded-xl text-center border border-yellow-400 shadow-md">
          <img
            src="/src/assets/contact/IMG_6221.png" // Replace with your own avatar or logo
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border border-yellow-300"
          />
          <h2 className="text-xl font-bold text-yellow-300 mb-1">{t('contact.name')}</h2>
          <p className="text-sm text-gray-400">{t('contact.job-title')}</p>
          
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-2/3">
         
          <p className="text-gray-300 mb-6 leading-relaxed text-wrap">
            {t('contact.desc1')}
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
              <FaRegStickyNote className="text-yellow-300 text-xl group-hover:scale-110 transition" />
              <a
                href="https://www.notion.so/Weekly-Blog-Planner-2349fcf27599801e9da9e3268d1a8238?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 group-hover:underline"
              >
                notion.so/arzugoyushova
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
  {t('contact.CVbutton')}
</a>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic mt-10">
            {t('contact.desc2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
