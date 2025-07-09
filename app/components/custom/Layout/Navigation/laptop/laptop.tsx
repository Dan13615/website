// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import getPagesConfigs from "~/data/pageConfig";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

/* ----- COMPONENTS ----- */
export function NavbarLaptop() {
  const pagesConfig = getPagesConfigs();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  enum langages {
    FR = "fr",
    EN = "en",
  }

  const [langage, setLangage] = useState(langages.FR);

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(langage === langages.FR ? langages.EN : langages.FR);
    setLangage(langage === langages.FR ? langages.EN : langages.FR);
  };

  return (
    <>
      <div className="flex flex-row w-full p-6 justify-between items-center textStyle-navigation absolute top-0 z-50 border-b-2 color-border-gold">
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src="/img/LFB.png" alt="Logo" className="w-10 h-10" />
          </a>
        </div>
        <div className="flex flex-row gap-[5vw] justify-center items-center flex-1 pl-22">
          {pagesConfig.map((page) => {
            const isActive = currentPath === page.path;
            return (
              <div className={`nav-item relative group ${isActive ? "active" : ""}`} key={page.name}>
                <a href={page.path}>
                  <span className={`text-2xl font-extrabold transition-colors duration-500 ${isActive ? "color-text-gold" : "text-white group-hover:text-yellow-300"}`}>{page.name}</span>
                  <div className={`absolute left-0 right-0 -bottom-1 flex flex-col items-center gap-1 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}>
                    <div className={`h-[2px] w-full color-bg-gold origin-left transform ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-300`}></div>
                    <div className={`h-[2px] w-full color-bg-gold origin-left transform ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500`}></div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-shrink-0 w-10 items-end">
          <img onClick={() => changeLanguage()} className="flex items-center gap-2 h-6" src={langage === langages.FR ? "/img/flags/fr.png" : "/img/flags/en.png"} alt={langage === langages.FR ? "English Flag" : "French Flag"} />
        </div>
      </div>

      <div className="fixed top-0 left-0 w-22 h-screen border-r-2 color-border-gold z-40"></div>
      <div className="fixed top-0 right-0 w-22 h-screen border-l-2 color-border-gold z-40"></div>
    </>
  );
}
