// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { NavbarLaptop } from "./laptop/laptop";
import { NavbarMobile } from "./mobile/mobile";

/* ----- COMPONENTS ----- */
export function AppSidebar() {
	return (
		<div>
			<div className="laptop">
				<NavbarLaptop />
			</div>
			<div className="mobile">
				<NavbarMobile />
			</div>
		</div>
	);
}
