// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import React from "react";
import PageLayout from "../PageLayout/PageLayout";

/* ----- PROPS ----- */
interface Props {
	subtitle: string;
};


/* ----- COMPONENT ----- */
export default function PresentationPage({ subtitle }: Props) {
	return (
		<PageLayout>
			<div className="flex flex-col items-center justify-center w-full h-full gap-4">
				<h2 className="text-xl md:text-2xl font-bold text-center">{subtitle}</h2>
				<h1 className="text-5xl md:text-7xl font-bold text-center">La Femme du Boulanger</h1>
			</div>
		</PageLayout>
	);
};
