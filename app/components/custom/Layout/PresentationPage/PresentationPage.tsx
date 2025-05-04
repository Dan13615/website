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
	children?: React.ReactNode;
};


/* ----- COMPONENT ----- */
export default function PresentationPage({ subtitle, children }: Props) {
	return (
		<PageLayout bg_color="gray">
			<div className="flex flex-col items-center justify-center w-full h-full">
				<h2 className="textStyle-subtitle font-bold text-center">{subtitle}</h2>
				<h1 className="textStyle-title font-bold text-center mb-12">La Femme Du Boulanger</h1>
				{children}
			</div>
		</PageLayout>
	);
};
