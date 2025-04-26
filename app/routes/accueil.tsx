// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import PageLayout from "~/components/custom/Layout/PageLayout/PageLayout";
import type { Route } from "./+types/accueil";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import MidPage from "~/components/custom/Layout/MidPage/MidPage";
import Button from "~/components/custom/Button/NavigateButton/NavigateButton";
import NavigateButton from "~/components/custom/Button/NavigateButton/NavigateButton";

/* ----- COMPONENTS ----- */
export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "La Femme du Boulanger" },
		{ name: "description", content: "Restaurant au coeur de Nice" },
	];
}

export default function AccueilPage() {
	return <div>
		< PresentationPage
			subtitle="Restaurant au coeur de Nice"
		/>
		<PageLayout>
			<div className="flex flex-col items-center justify-center w-full h-full gap-6">
				<h1 className="text-4xl font-bold text-center">
					Un restaurant rustique proposant des produit locaux
				</h1>
				<div className="flex flex-row gap-8">
					<div className="flex flex-col w-1/2 gap-4">
						<h3 className="text-2xl font-bold">
							Decouvrez La Femme du Boulanger
						</h3>
						<p className="text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="flex flex-col items-center justify-center w-1/2 rounded-4xl bg-cover bg-center bg-[url(https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=)] object-cover">
					</div>
				</div>
			</div>
		</PageLayout>
		<MidPage
			side="left"
			image="url(https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=)"
		>
			<div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
				<h1 className="text-4xl font-bold text-center">
					Avis des Clients
				</h1>
				<p className="text-md">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p className="text-lg font-bold">
					John DOE
				</p>
			</div>
		</MidPage>
		<MidPage
			side="right"
			image="url(https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=)"
		>
			<div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
				<h1 className="text-4xl font-bold text-center">
					Nos Spécialités
				</h1>
				<p className="text-md">
					Nous proposons un brunch, des sandwichs et des steaks, préparés à base de produits locaux, ainsi que du vin...
				</p>
				<NavigateButton label="Découvrir" to="/carte" />
			</div>
		</MidPage>
		<PageLayout>
			<div className="flex flex-col items-center justify-center w-full h-full gap-6">
				<h1 className="text-4xl font-bold text-center">
					Qu'attendez vous pour venir !
				</h1>
				<NavigateButton label="Réserver une table" to="/contact" />
			</div>
		</PageLayout>
	</div >
}
