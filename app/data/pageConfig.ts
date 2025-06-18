// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { ChefHat, Contact, Home } from "lucide-react";
import type { PageConfig } from "../types/routeConfig";

/* ----- DATAS ----- */
const PagesConfigs: PageConfig[] = [
  { name: "Accueil", path: "/", componentPath: "routes/accueil.tsx", icon: Home },
  { name: "Carte", path: "/carte", componentPath: "routes/carte.tsx", icon: ChefHat },
  { name: "Contact", path: "/contact", componentPath: "routes/contact.tsx", icon: Contact },
];

export default function getPagesConfigs() {
  return PagesConfigs;
}
