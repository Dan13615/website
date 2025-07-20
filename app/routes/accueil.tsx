// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { useTranslation } from "react-i18next";
import { PageLayout } from "~/components/custom/Layout/PageLayout/PageLayout";
import type { Route } from "./+types/accueil";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import MidPage from "~/components/custom/Layout/MidPage/MidPage";
import NavigateButton from "~/components/custom/Button/NavigateButton/NavigateButton";
import TestimonialsCarousel from "~/components/custom/Display/Carousel/Carousel";

/* ----- COMPONENTS ----- */
export function meta({}: Route.MetaArgs) {
  return [{ title: "La Femme Du Boulanger" }, { name: "description", content: "Restaurant au coeur de Nice" }];
}

export default function AccueilPage() {
  const { t } = useTranslation();

  const presentationText = () => (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-center mb-4">
        <h3 className="textStyle-subtitle2 font-bold self-center laptop">{t("discover")}</h3>
      </div>
      <div className="flex items-center justify-center mb-4">
        <h1 className="textStyle-title2 font-bold mobile">{t("discover")}</h1>
      </div>
      {[1, 2, 3, 4, 5].map((index) => (
        <>
          <div key={index} className="flex items-center gap-4">
            <img src="/img/epi.png" alt="Epi" className="w-16 h-16" />
            <p className="textStyle-text">{t(`description${index}`)}</p>
          </div>
          <br />
        </>
      ))}
    </div>
  );

  return (
    <div>
      <PresentationPage subtitle={t("subtitle")}>
        <NavigateButton label={t("reserveTable")} zenchefAction="open" />
      </PresentationPage>
      <PageLayout bg_color="green" className={"laptop"}>
        <div className="flex flex-col items-center w-full h-full gap-6">
          <h1 className="textStyle-title2 font-bold text-center">{t("rusticRestaurant")}</h1>
          <div className="flex flex-row gap-[16vw] items-stretch">
            {presentationText()}
            <div className="w-full bg-cover bg-center object-cover rounded-4xl" style={{ backgroundImage: `url(/img/vegetables.jpeg)` }}></div>
          </div>
        </div>
      </PageLayout>
      <div className="mobile">
        <MidPage side="right" bg_color="green" image="/img/vegetables.jpeg">
          {presentationText()}
        </MidPage>
      </div>
      <MidPage side="left" bg_color="brown" image="/img/table.png">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
          <h1 className="textStyle-title2 font-bold text-center">{t("clientReviews")}</h1>
          <TestimonialsCarousel />
        </div>
      </MidPage>
      <MidPage side="right" bg_color="green" image="/img/specialite.png">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
          <h1 className="textStyle-title2 font-bold text-center">{t("specialties")}</h1>
          <p className="textStyle-text">{t("specialtiesDescription")}</p>
          <NavigateButton label={t("discoverMenu")} to="/carte" />
        </div>
      </MidPage>
      <PageLayout bg_color="brown">
        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
          <h1 className="textStyle-title font-bold text-center">{t("whatAreYouWaitingFor")}</h1>
          <NavigateButton label={t("reserveTable")} zenchefAction="open" />
        </div>
      </PageLayout>
    </div>
  );
}
