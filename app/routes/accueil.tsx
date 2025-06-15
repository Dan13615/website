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
import Button from "~/components/custom/Button/NavigateButton/NavigateButton";
import NavigateButton from "~/components/custom/Button/NavigateButton/NavigateButton";

/* ----- COMPONENTS ----- */
export function meta({}: Route.MetaArgs) {
  return [{ title: "La Femme Du Boulanger" }, { name: "description", content: "Restaurant au coeur de Nice" }];
}

export default function AccueilPage() {
  return (
    <div>
      <PresentationPage subtitle="L’âme de la cuisine française au cœur de Nice">
        <NavigateButton label="Réserver une table" to="https://www.thefork.fr/restaurant/la-femme-du-boulanger-r51215" />
      </PresentationPage>
      <PageLayout bg_color="green">
        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
          <h1 className="textStyle-title2 font-bold text-center">Un restaurant rustique proposant des produit locaux</h1>
          <div className="flex flex-row gap-20 items-center">
            <div className="flex flex-col w-1/2 gap-4">
              <h3 className="textStyle-subtitle2 font-bold">Decouvrez La Femme Du Boulanger</h3>
              <p className="textStyle-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="w-1/2 h-full">
              <img src="/img/kanna_wit.jpg" alt="Kanna Wit" className="rounded-4xl" />
            </div>
          </div>
        </div>
      </PageLayout>
      <MidPage side="left" bg_color="brown" image="/img/kanna_wit.jpg">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
          <h1 className="textStyle-title2 font-bold text-center">Avis des Clients</h1>
          <p className="textStyle-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="textStyle-subtitle2 font-bold">John DOE</p>
        </div>
      </MidPage>
      <MidPage side="right" bg_color="green" image="/img/kanna_wit.jpg">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8 text-center">
          <h1 className="textStyle-title2 font-bold text-center">Nos Spécialités</h1>
          <p className="textStyle-text">Nous proposons un brunch, des sandwichs et des steaks, préparés à base de produits locaux, ainsi que du vin...</p>
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
