// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { PageLayout } from "~/components/custom/Layout/PageLayout/PageLayout";
import type { Route } from "./+types/accueil";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import MidPage from "~/components/custom/Layout/MidPage/MidPage";
import NavigateButton from "~/components/custom/Button/NavigateButton/NavigateButton";
import TestimonialsCarousel from "~/components/custom/Display/Carousel/Carousel";

/* ----- COMPONENTS ----- */
export function meta({ }: Route.MetaArgs) {
	return [{ title: "La Femme Du Boulanger" }, { name: "description", content: "Restaurant au coeur de Nice" }];
}

function presentationText() {
	return <div className="flex flex-col w-full gap-4">
		<h3 className="textStyle-subtitle2 font-bold self-center laptop">Decouvrez La Femme Du Boulanger</h3>
		<div className="flex items-center justify-center mb-4">
			<h1 className="textStyle-title2 font-bold mobile">Decouvrez La Femme Du Boulanger</h1>
		</div>
		<div className="flex items-center gap-4">
			<img src="/img/epi.png" alt="Epi" className="w-16 h-16" />
			<p className="textStyle-text">Niché en plein cœur de Nice, à seulement 50 mètres de la célèbre Promenade des Anglais et à deux pas du jardin Albert 1er, “La femme du boulanger” est un havre de gastronomie où l’authenticité et la passion pour le fait-maison sont les maîtres mots.</p>
		</div>
		<div className="flex items-center gap-4">
			<img src="/img/epi.png" alt="Epi" className="w-16 h-16" />
			<p className="textStyle-text">Installé dans la zone piétonne, à l’abri du tumulte urbain, ce restaurant au charme provençal allie convivialité, raffinement et respect des traditions culinaires françaises. </p>
		</div>
		<div className="flex items-center gap-4">
			<img src="/img/epi.png" alt="Epi" className="w-16 h-16" />
			<p className="textStyle-text">Dès l’entrée, l’accueil chaleureux et l’atmosphère intimiste de la salle, décorée avec goût dans un style mêlant pierre naturelle, bois brut et touches de modernité, annoncent la promesse d’un moment hors du temps. Ici, tout est fait maison, de l’entrée au dessert, sans exception.</p>
		</div>
		<div className="flex items-center gap-4">
			<img src="/img/epi.png" alt="Epi" className="w-16 h-16" />
			<p className="textStyle-text">La cuisine rend hommage aux grands classiques de la gastronomie française, tout en offrant une pointe de créativité et d’audace.</p>
		</div>
		<div className="flex items-center gap-4">
			<img src="/img/epi.png" alt="Epi" className="w-16 h-16" />
			<p className="textStyle-text">Le chef, amoureux des bons produits, sélectionne chaque ingrédient avec soin auprès de producteurs locaux et de marchés niçois réputés, garantissant une fraîcheur irréprochable.</p>
		</div>
	</div>;
}

export default function AccueilPage() {
	return (
		<div>
			<PresentationPage subtitle="L’âme de la cuisine française au cœur de Nice">
				<NavigateButton label="Réserver une table" to="https://www.thefork.fr/restaurant/la-femme-du-boulanger-r51215" />
			</PresentationPage>
			<PageLayout bg_color="green" className={"laptop"}>
				<div className="flex flex-col items-center w-full h-full gap-6">
					<h1 className="textStyle-title2 font-bold text-center">Un restaurant rustique proposant des produit locaux</h1>
					<div className="flex flex-row gap-[16vw] items-stretch">
						{presentationText()}
						<div className="w-full bg-cover bg-center object-cover rounded-4xl" style={{ backgroundImage: `url(/img/vegetables.jpeg)` }}>
						</div>
					</div>
				</div>
			</PageLayout>
			<div className="mobile">
				<MidPage side="right" bg_color="green" image="/img/vegetables.jpeg">
					{presentationText()}
				</MidPage>
			</div>
			<MidPage side="left" bg_color="brown" image="/img/kanna_wit.jpg">
				<div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
					<h1 className="textStyle-title2 font-bold text-center">Avis des Clients</h1>
					<TestimonialsCarousel />
				</div>
			</MidPage>
			<MidPage side="right" bg_color="green" image="/img/kanna_wit.jpg">
				<div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
					<h1 className="textStyle-title2 font-bold text-center">Nos Spécialités</h1>
					<p className="textStyle-text">Ouvert dès le matin pour les petits déjeuner et les brunchs, le restaurant propose également à la carte des spécialités incontournables comme la daurade, la souris d’agneau, le canard à l’orange ou encore les tartines gourmandes. Les végétariens ne sont pas oubliés, avec des plats raffinés mettant en valeur les légumes de saison. En dessert, la tarte tatin caramélisée ou la crème brûlée viennent conclure le repas en douceur.</p>
					<NavigateButton label="Découvrir" to="/carte" />
				</div>
			</MidPage>
			<PageLayout bg_color="brown">
				<div className="flex flex-col items-center justify-center w-full h-full gap-6">
					<h1 className="textStyle-title font-bold text-center">Qu'attendez vous ?</h1>
					<NavigateButton label="Réserver une table" to="/contact" />
				</div>
			</PageLayout>
		</div>
	);
}
