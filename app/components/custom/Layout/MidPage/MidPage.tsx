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
	image: String;
	bg_color?: String;
	text_color?: String;
};


/* ----- COMPONENT ----- */
export default function MidPage({ children, side, image, bg_color = "gray", text_color = "white" }: Props) {
	const getSide = (s: boolean) => (s ? "right" : "left");

	return (
		<div className="w-full min-h-screen flex flex-row">
			{
				[true, false].map((s, index) => (
					<div key={index} className={`w-1/2 ${side == getSide(s) ? `bg-cover bg-center object-cover` : `px-[200px] py-40 flex flex-col items-center justify-center color-bg-${bg_color} color-text-${text_color}`}`}
						style={side == getSide(s) ? { backgroundImage: `url(${image})` } : {}}
					>
						{side == getSide(!s) && children}
					</div>
				))
			}
		</div>
	);
};
