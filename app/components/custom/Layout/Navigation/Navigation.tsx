// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import css from "./navigation.module.css";
import { NavbarLaptop } from "./laptop/laptop";
import { NavbarMobile } from "./mobile/mobile";

/* ----- COMPONENTS ----- */
export function AppSidebar() {
	return (
		<div className={css.navbar}>
			<div className={css.laptop}>
				<NavbarLaptop />
			</div>
			<div className={css.mobile}>
				<NavbarMobile />
			</div>
		</div>
	);
}
