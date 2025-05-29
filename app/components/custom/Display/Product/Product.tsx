// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import React from "react";

/* ----- PROPS ----- */
interface Props {
	name: String,
	price: String,
	description: String,
};


/* ----- COMPONENT ----- */
export default function Product({ name, price, description }: Props) {
	const getSide = (s: boolean) => (s ? "right" : "left");

	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-row gap-4 w-full items-center">
				<div className="textStyle-text">{name}</div>
				<div className="flex-grow border-dotted border-b-2 h-4"></div>
				<div className="textStyle-text">{price}€</div>
			</div>
			<div className="textStyle-text">{description}</div>
		</div>
	);
};
