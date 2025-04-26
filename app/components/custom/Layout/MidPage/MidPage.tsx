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
	side: "left" | "right";
	image: string;
};


/* ----- COMPONENT ----- */
export default function MidPage({ children, side, image }: Props) {
	return (
		<div className="w-full min-h-screen flex flex-row">
			<div className={`p-10 md:p-28 w-1/2 flex flex-col items-center justify-center ${side == "right" && `bg-cover bg-center bg-[${image}] object-cover`}`}>
				{side == "left" && children}
			</div>
			<div className={`p-10 md:p-28 w-1/2 flex flex-col items-center justify-center ${side == "left" && `bg-cover bg-center bg-[${image}] object-cover`}`}>
				{side == "right" && children}
			</div>
		</div>
	);
};
