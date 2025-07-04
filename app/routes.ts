// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { type RouteConfig, route } from "@react-router/dev/routes";
import getPagesConfigs from "./data/pageConfig";

/* ----- DATAS ----- */
export default [
	...getPagesConfigs().map((page) => {
		return route(page.path, page.componentPath);
	}),
] satisfies RouteConfig;
