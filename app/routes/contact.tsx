// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import ContactForm from "~/components/custom/Forms/ContactForm";
import { PageLayout } from "~/components/custom/Layout/PageLayout/PageLayout";
import { ClientOnly } from "remix-utils/client-only";
import ContactMap from "~/components/custom/Map/ContactMap";

/* ----- COMPONENTS ----- */
export function meta() {
	return [{ title: "La Femme Du Boulanger - Contact" }, { name: "description", content: "Nous contacter" }];
}

export default function ContactPage() {
	return (
		<div>
			<PresentationPage subtitle="Nous contacter" />
			<PageLayout bg_color="brown">
				<div className="container mx-auto px-4">
					<div className="text-center mb-8">
						<h2 className="text-5xl font-bold text-white mb-4">Envoyez-nous un message</h2>
						<p className="text-3xl text-white max-w-4xl mx-auto">Une question, une suggestion ou simplement envie de nous dire bonjour ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.</p>
					</div>
					<ContactForm />
				</div>
			</PageLayout>
			<PageLayout bg_color="green">
				<div className="container mx-auto px-4">
					<div className="text-center mb-8">
						<h2 className="text-5xl font-bold text-white mb-4">Où nous trouver</h2>
						<p className="text-3xl text-white mb-8">Venez nous rendre visite dans notre restaurant !</p>
					</div>
					<ClientOnly fallback={<div className="w-full h-96 bg-white/20 rounded-lg flex items-center justify-center text-white">Chargement de la carte...</div>}>{() => <ContactMap address="La Femme Du Boulanger" latitude={43.696464598220196} longitude={7.264909612291829} />}</ClientOnly>
				</div>
				<div className="container mx-auto px-4 mt-8 pt-16">
					<div className="text-center">
						<p className="text-3xl text-white mb-8">Pour toute question, suggestion ou demande particulière, n'hésitez pas à nous contacter via le formulaire ci-dessus ou par téléphone.</p>
						<p className="text-2xl text-white">
							Téléphone :{" "}
							<a href="tel:+33493000000" className="text-amber-500 hover:underline">
								04 93 00 00 00
							</a>
						</p>
						<p className="text-2xl text-white">Nous sommes ouverts tout les jours, de 9h à 23h.</p>
					</div>
				</div>
			</PageLayout>
		</div>
	);
}
