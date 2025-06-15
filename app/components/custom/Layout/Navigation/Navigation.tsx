// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import getPagesConfigs from "~/data/pageConfig";

/* ----- COMPONENTS ----- */
export function AppSidebar() {
  const pagesConfig = getPagesConfigs();

  return (
    <>
      {/* Navigation bar */}
      <div className="flex flex-row w-screen p-6 justify-center items-center gap-60 textStyle-navigation absolute top-0 z-50 border-b-2 border-yellow-500">
        {pagesConfig.map((page) => (
          <div className="text-white" key={page.name}>
            <a href={page.path}>
              <span>{page.name}</span>
            </a>
          </div>
        ))}
      </div>

      {/* Left border */}
      <div className="fixed top-0 left-0 w-20 h-screen border-r-2 border-yellow-500 z-40"></div>
      <div className="fixed top-0 right-0 w-20 h-screen border-l-2 border-yellow-500 z-40"></div>
    </>
  );
}
