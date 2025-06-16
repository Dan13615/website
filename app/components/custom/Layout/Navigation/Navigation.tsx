// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import getPagesConfigs from "~/data/pageConfig";
import { useState, useEffect } from "react";

/* ----- COMPONENTS ----- */
export function AppSidebar() {
  const pagesConfig = getPagesConfigs();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      <div className="flex flex-row w-screen p-6 justify-center items-center gap-64 textStyle-navigation absolute top-0 z-50 border-b-2 color-border-gold">
        {pagesConfig.map((page) => {
          const isActive = currentPath === page.path;
          return (
            <div className={`nav-item relative group ${isActive ? "active" : ""}`} key={page.name}>
              <a href={page.path}>
                <span
                  className={`text-2xl font-extrabold transition-colors duration-500 
                  ${isActive ? "color-text-gold" : "text-white group-hover:text-yellow-300"}`}
                >
                  {page.name}
                </span>
                <div
                  className={`absolute left-0 right-0 -bottom-1 flex flex-col items-center gap-1
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}
                >
                  <div
                    className={`h-[2px] w-full color-bg-gold origin-left transform 
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-300`}
                  ></div>
                  <div
                    className={`h-[2px] w-full color-bg-gold origin-left transform 
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500`}
                  ></div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <div className="fixed top-0 left-0 w-20 h-screen border-r-2 color-border-gold z-40"></div>
      <div className="fixed top-0 right-0 w-20 h-screen border-l-2 color-border-gold z-40"></div>
    </>
  );
}
