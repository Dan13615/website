// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import React from "react";

/* ----- PROPS ----- */
interface Props {
	bg_color?: String;
	text_color?: String;
	children?: React.ReactNode;
};


/* ----- COMPONENT ----- */
export default function PageLayout({ bg_color, text_color, children }: Props) {
	return (
		<div className={`w-full min-h-screen px-[200px] py-40 flex flex-col items-center justify-center ${bg_color != null ? `color-bg-${bg_color}` : ""} ${text_color != null ? `color-text-${text_color}` : "color-text-white"}`}>
			{children}
		</div>
	);
};
