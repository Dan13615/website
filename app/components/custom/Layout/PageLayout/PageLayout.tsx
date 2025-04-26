// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import React from "react";

/* ----- PROPS ----- */
interface Props {
	children?: React.ReactNode;
};


/* ----- COMPONENT ----- */
export default function PageLayout({ children }: Props) {
	return (
		<div className="w-full min-h-screen p-12 md:p-32 flex flex-col items-center justify-center">
			{children}
		</div>
	);
};
