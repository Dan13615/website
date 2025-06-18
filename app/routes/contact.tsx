// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import ContactForm from "~/components/custom/Forms/ContactForm";

/* ----- COMPONENTS ----- */
export function meta() {
  return [{ title: "La Femme Du Boulanger - Contact" }, { name: "description", content: "Nous contacter" }];
}

export default function ContactPage() {
  return (
    <div>
      <PresentationPage subtitle="Nous contacter" />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Envoyez-nous un message</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Une question, une suggestion ou simplement envie de nous dire bonjour ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
