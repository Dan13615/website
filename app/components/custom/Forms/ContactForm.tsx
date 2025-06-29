// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { useState } from "react";
import Button from "../Button/Button/Button";

/* ----- INTERFACE ----- */
interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

/* ----- COMPONENT ----- */
export default function ContactForm() {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		console.log("Début de l'envoi du formulaire de contact");

		try {
			console.log("Envoi du formulaire de contact vers /.netlify/functions/contact:", formData);

			const response = await fetch("/.netlify/functions/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			console.log("Réponse reçue:", response.status, response.statusText);

			const responseData = await response.json();
			console.log("Données de réponse:", responseData);

			if (response.ok) {
				setSubmitStatus("success");
				setFormData({ name: "", email: "", subject: "", message: "" });
				console.log("Formulaire envoyé avec succès");
			} else {
				console.error("Erreur du serveur:", responseData);
				setSubmitStatus("error");
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi du formulaire:", error);
			setSubmitStatus("error");
		} finally {
			console.log("Fin de l'envoi du formulaire de contact");
			setIsSubmitting(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto">
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label htmlFor="name" className="block textStyle-text font-medium text-white mb-2">
							Nom *
						</label>
						<input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Votre nom" />
					</div>

					<div>
						<label htmlFor="email" className="block textStyle-text font-medium text-white mb-2">
							Email *
						</label>
						<input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="votre.email@exemple.com" />
					</div>
				</div>

				<div>
					<label htmlFor="subject" className="block textStyle-text font-medium text-white mb-2">
						Sujet *
					</label>
					<input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Sujet de votre message" />
				</div>

				<div>
					<label htmlFor="message" className="block textStyle-text font-medium text-white mb-2">
						Message *
					</label>
					<textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical" placeholder="Votre message..." />
				</div>

				{submitStatus === "success" && (
					<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
						<p className="text-green-800">Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
					</div>
				)}

				{submitStatus === "error" && (
					<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
						<p className="text-red-800">Une erreur s'est produite lors de l'envoi. Veuillez réessayer.</p>
					</div>
				)}

				<div className="w-full flex justify-center">
					<Button label={isSubmitting ? "Envoi en cours..." : "Envoyer le message"} disabled={isSubmitting} type="submit" />
				</div>
			</form>
		</div>
	);
}
