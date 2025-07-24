import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const categories = [
    { titleKey: 'about.titles.title1', itemsKey: 'about.items.title1' },
    { titleKey: 'about.titles.title2', itemsKey: 'about.items.title2' },
    { titleKey: 'about.titles.title3', itemsKey: 'about.items.title3' },
    { titleKey: 'about.titles.title4', itemsKey: 'about.items.title4' },
  ];

  return (
    <section
      id="about"
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-16 text-white shrink-0"
    >
      {/* Left Side: Short Bio */}
      <div className="md:w-1/2 max-w-xl mb-4">
        <h2 className="text-4xl font-serif text-yellow-400 mb-4">{t('about.intro.curator')}</h2>
        <p className="text-lg text-wrap text-neutral-300 leading-relaxed border-l-4 border-yellow-600 pl-4">
          {t('about.intro.desc')}
        </p>
      </div>

      {/* Right Side: Skills - vertical scroll on mobile, grid on desktop */}
      <div className="md:w-1/2 w-screen max-h-100 md:max-h-full overflow-y-auto py-4 md:overflow-visible mb-8 md:mb-0 grid grid-cols-2 gap-y-4 md:px-12 justify-items-center">
        {categories.map(({ titleKey, itemsKey }, i) => (
          <div
            key={titleKey}
            className={`relative bg-white text-yellow-900 md:w-56 w-44 px-4 py-3 rounded-md shadow-lg border border-yellow-300 shrink-0 ${
              i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[1.5deg]'
            }`}
          >
            {/* Pin */}
            <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600 rounded-full shadow-md z-10" />
            <h4 className="text-sm font-bold text-yellow-700 mb-2">{t(titleKey)}</h4>
            <ul className="space-y-1 text-sm">
              {t(itemsKey, { returnObjects: true }).map((item) => (
                <li key={item} className="before:content-['•'] before:mr-2 before:text-yellow-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
