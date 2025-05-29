// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import PageHeaderImage from "~/components/custom/Layout/PageHeaderImage/PageHeaderImage";
import type { Route } from "./+types/carte";
import PresentationPage from "~/components/custom/Layout/PresentationPage/PresentationPage";
import Product from "~/components/custom/Display/Product/Product";

/* ----- COMPONENTS ----- */
export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "La Femme Du Boulanger - Carte" },
		{ name: "description", content: "Decouvrir nos cartes et menus" },
	];
}

export default function CartePage() {
	const poilane = [
		{
			name: "Mlle Seguin",
			price: 16.9,
			description: "Warm goat cheese with flower honey crystallized, pears with spices, dry grapes, almonds and walnuts, figs chutney",
		},
		{
			name: "L'Isola",
			price: 17.9,
			description: "Smoked morteau sausage sprinkled with morbier, gratin dauphinois, pickels",
		},
		{
			name: "L'Italienne",
			price: 16.9,
			description: "Fresh tomatoes, mozzarella, olives, ham, crystallize tomatoes with basil",
		},
		{
			name: "La Forestière",
			price: 17.9,
			description: "Mixed fresh mushrooms with chopped parsley, sprinkled with compte cheese",
		},
		{
			name: "La Sud-Ouest",
			price: 23.9,
			description: "Fresh homemade foie gras with figs, sliced smoked duck breast, forest mushrooms, crystalized pears",
		},
		{
			name: "L'Orientale",
			price: 17.9,
			description: "Eggplant caviar, steam cooked julienne vegetables, crystallized tomatoes with herbs",
		},
		{
			name: "La Crétoise",
			price: 16.9,
			description: "Small vegetables from the market with olive oil, sprinkled with feta cheese, tapenade, basil",
		},
		{
			name: "La Raffali",
			price: 17.9,
			description: "Raw ham or bresi with crystallized apples, brie cheese, pickles, honey, salad",
		},
		{
			name: "La Norvégienne",
			price: 20.9,
			description: "Smoked salmon, lemon, dill sauce, vegetables from the market, capers flowers",
		},
		{
			name: "La Niçoise",
			price: 16.9,
			description: "Sun ratatouille with his homemade beef (crystallized tomatoes, zucchini, eggplant, peppers, basil, fresh homemade tapenade)",
		},
	];

	const breakfast_formulas = [
		{
			name: "The Vital",
			price: 10.9,
			description: [
				"Hot drink (tea, cappucino or chocolate)",
				"Special and rustic breads",
				"Homemade Jam",
			],
		},
		{
			name: "The Greedy",
			price: 16.9,
			description: [
				"Hot drink (tea, cappucino or chocolate)",
				"Special and rustic breads",
				"Homemade Jam",
				"Eggs-bacon (fried, omelette or scrambled)",
				"Fresh fruits salad",
			],
		},
		{
			name: "The Morning plate",
			price: 13.9,
			description: [
				"Omelette or scrambled eggs",
				"(Nature or with chees) + Bacon",
				"Ham and cheese",
			],
		},
	]

	const brunch = {
		name: "Brunch",
		price: 27,
		description: [
			"Hot drink (tea, cappucino or chocolate)",
			"Special and rustic breads",
			"Scrambled Eggs, bacun, mesclun",
			"Charcuterie",
			"Smoked salmon",
			"Cheese",
			"Homemade Jam",
			"Fresh fruits salad",
			"Freshly squeezed orange juice",
			"Whipped cream cheese",
			"Gluten-free bread supplement: 1.50€",
		]
	}

	return <div>
		<PresentationPage
			subtitle="Decouvrir nos cartes et menus"
		/>
		<PageHeaderImage
			bg_color="green"
			title="Nos Menus"
			subtitle="À déguster sans fin !"
			image="/img/kanna_wit.jpg"
		>
			<div className="flex flex-row w-full gap-24">
				<div className="flex flex-col w-1/2 gap-16">
					{
						breakfast_formulas.map((f) =>
							<div className="flex flex-col w-full justify-center items-center">
								<div className="flex flex-row gap-6 w-full justify-center items-center">
									<div className="textStyle-subtitle3 text-center">{f.name}</div>
									<div className="textStyle-subtitle3 text-center">{f.price.toFixed(2)}€</div>
								</div>
								<div className="flex flex-col w-full justify-center items-center">
									{f.description.map((e) => <div className="textStyle-text  text-center">{e}</div>)}
								</div>
							</div>
						)
					}
				</div>
				<div className="flex flex-col w-1/2">
					<div className="flex flex-col w-full justify-center items-center gap-12">
						<div className="flex flex-col w-full justify-center items-center">
							<div className="textStyle-subtitle3 text-center">{brunch.name}</div>
							<div className="textStyle-subtitle3 text-center">{brunch.price.toFixed(2)}€</div>
						</div>
						<div className="flex flex-col w-full justify-center items-center gap-4">
							{brunch.description.map((e, i) => [<div className="textStyle-text  text-center">{e}</div>, (i < brunch.description.length - 1) && <div className="w-8 border-solid border-2 rounded-md"></div>])}
						</div>
					</div>
				</div>
			</div>
		</PageHeaderImage>
		<PageHeaderImage
			bg_color="brown"
			title="Les Tartines Poilanes"
			subtitle="Pain cuit au feu de bois, garni et gratiné, accompagné de mesclun Niçois."
			image="/img/kanna_wit.jpg"
		>
			{poilane.map((p, i) => <Product name={p.name} price={p.price.toFixed(2)} description={p.description} />)}
		</PageHeaderImage>
	</div>
}
