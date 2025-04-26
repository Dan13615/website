// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import type { Route } from "./+types/carte";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";

/* ----- COMPONENTS ----- */
export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "La Femme du Boulanger - Carte" },
		{ name: "description", content: "Decouvrir nos cartes et menus" },
	];
}

export default function CartePage() {
	return <div>
		<PresentationPage
			subtitle="Decouvrir nos cartes et menus"
		/>
	</div>
}
