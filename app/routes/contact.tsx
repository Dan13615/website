// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import type { Route } from "./+types/contact";

/* ----- COMPONENTS ----- */
export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "La Femme du Boulanger - Contact" },
		{ name: "description", content: "Nous contacter" },
	];
}

export default function ContactPage() {
	return <div>
		<PresentationPage
			subtitle="Nous contacter"
		/>
	</div>
}
