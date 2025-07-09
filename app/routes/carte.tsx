// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { useTranslation } from "react-i18next";
import PageHeaderImage from "~/components/custom/Layout/PageHeaderImage/PageHeaderImage";
import type { Route } from "./+types/carte";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import Product from "~/components/custom/Display/Product/Product";

/* ----- COMPONENTS ----- */
export function meta({}: Route.MetaArgs) {
  return [{ title: "La Femme Du Boulanger - Carte" }, { name: "description", content: "Decouvrir nos cartes et menus" }];
}

export default function CartePage() {
  const { t } = useTranslation();

  const breakfast_formulas = [
    {
      name: "The Vital",
      price: 10.9,
      description: t("breakfastVital", { returnObjects: true }) as string[],
    },
    {
      name: "The Greedy",
      price: 16.9,
      description: t("breakfastGreedy", { returnObjects: true }) as string[],
    },
    {
      name: "The Morning plate",
      price: 13.9,
      description: t("breakfastMorningPlate", { returnObjects: true }) as string[],
    },
  ];

  const brunch = {
    name: "Brunch",
    price: 27,
    description: t("brunchDescription", { returnObjects: true }) as string[],
  };

  const poilane = [
    {
      name: "Mlle Seguin",
      price: 16.9,
      description: t("poilaneDescription1"),
    },
    {
      name: "L'Isola",
      price: 17.9,
      description: t("poilaneDescription2"),
    },
    {
      name: "L'Italienne",
      price: 16.9,
      description: t("poilaneDescription3"),
    },
    {
      name: "La Forestière",
      price: 17.9,
      description: t("poilaneDescription4"),
    },
    {
      name: "La Sud-Ouest",
      price: 23.9,
      description: t("poilaneDescription5"),
    },
    {
      name: "L'Orientale",
      price: 17.9,
      description: t("poilaneDescription6"),
    },
    {
      name: "La Crétoise",
      price: 16.9,
      description: t("poilaneDescription7"),
    },
    {
      name: "La Raffali",
      price: 17.9,
      description: t("poilaneDescription8"),
    },
    {
      name: "La Norvégienne",
      price: 20.9,
      description: t("poilaneDescription9"),
    },
    {
      name: "La Niçoise",
      price: 16.9,
      description: t("poilaneDescription10"),
    },
  ];

  return (
    <div>
      <PresentationPage subtitle={t("discoverMenus")} />
      <PageHeaderImage bg_color="green" title={t("menusTitle")} subtitle={t("menusSubtitle")} image="/img/breakfast.jpeg">
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-24">
          <div className="flex flex-col w-full gap-16">
            {breakfast_formulas.map((f) => (
              <div className="flex flex-col w-full justify-center items-center" key={f.name}>
                <div className="flex flex-row gap-6 w-full justify-center items-center">
                  <div className="textStyle-subtitle3 text-center">{f.name}</div>
                  <div className="textStyle-subtitle3 text-center">{f.price.toFixed(2)}€</div>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                  {f.description.map((e, i) => (
                    <div key={i} className="textStyle-text text-center">
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[40vw] border-solid border-2 rounded-md mobile"></div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full justify-center items-center gap-12">
              <div className="flex flex-col w-full justify-center items-center">
                <div className="textStyle-subtitle3 text-center">{brunch.name}</div>
                <div className="textStyle-subtitle3 text-center">{brunch.price.toFixed(2)}€</div>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-4">
                {brunch.description.map((e, i) => (
                  <div key={i} className="textStyle-text text-center">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageHeaderImage>
      <PageHeaderImage bg_color="brown" title={t("poilaneTitle")} subtitle={t("poilaneSubtitle")} image="/img/tartine.jpeg">
        {poilane.map((p, i) => (
          <Product key={i} name={p.name} price={p.price.toFixed(2)} description={p.description} />
        ))}
      </PageHeaderImage>
    </div>
  );
}
