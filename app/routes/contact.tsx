// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { useTranslation } from "react-i18next";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import ContactForm from "~/components/custom/Forms/ContactForm";
import { PageLayout } from "~/components/custom/Layout/PageLayout/PageLayout";
import { ClientOnly } from "remix-utils/client-only";
import ContactMap from "~/components/custom/Map/ContactMap";
import NavigateButton from "~/components/custom/Button/NavigateButton/NavigateButton";

/* ----- COMPONENTS ----- */
export function meta() {
  return [{ title: "La Femme Du Boulanger - Contact" }, { name: "description", content: "Nous contacter" }];
}

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PresentationPage subtitle={t("contactUs")} />
      <PageLayout bg_color="brown">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="textStyle-title2 font-bold text-white mb-4">{t("sendMessage")}</h2>
            <p className="textStyle-subtitle2 text-white">{t("sendMessageDescription")}</p>
          </div>
          <ContactForm />
        </div>
      </PageLayout>
      <PageLayout bg_color="green">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="textStyle-title2 font-bold text-white mb-4">{t("findUs")}</h2>
            <p className="textStyle-subtitle2 text-white mb-8">{t("findUsDescription")}</p>
          </div>
          <ClientOnly fallback={<div className="w-full h-96 bg-white/20 rounded-lg flex items-center justify-center text-white">{t("loadingMap")}</div>}>{() => <ContactMap address="La Femme Du Boulanger" latitude={43.696464598220196} longitude={7.264909612291829} />}</ClientOnly>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-16">
          <div className="text-center">
            {/* Add reservation button */}
            <NavigateButton label={t("reserveTable")} zenchefAction="open" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
