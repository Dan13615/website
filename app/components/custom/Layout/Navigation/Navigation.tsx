// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import getPagesConfigs from "~/data/pageConfig"

/* ----- COMPONENTS ----- */
export function AppSidebar() {
	const pagesConfig = getPagesConfigs();

	return (
		<div className="flex flex-row w-screen p-6 justify-center items-center gap-60 textStyle-navigation fixed bg-white z-50">
			{pagesConfig.map((page) => (
				<div key={page.name}>
					<a href={page.path}>
						<span>{page.name}</span>
					</a>
				</div>
			))}
		</div>
	)
}
