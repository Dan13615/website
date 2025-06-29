// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import * as React from "react";

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
		<>
			<div className={`w-full min-h-screen flex flex-row laptop`}>
				{
					[true, false].map((s, index) => (
						<div key={index} className={`w-1/2 ${side == getSide(s) ? `bg-cover bg-center object-cover` : `px-[12.5vw] py-[10vw] flex flex-col items-center justify-center color-bg-${bg_color} color-text-${text_color}`}`}
							style={side == getSide(s) ? { backgroundImage: `url(${image})` } : {}}
						>
							{side == getSide(!s) && children}
						</div>
					))
				}
			</div>
			<div className={`w-full min-h-screen mobile bg-cover bg-center object-cover px-[8vw] py-[5vw] flex flex-col items-center justify-center color-bg-${bg_color} color-text-${text_color} relative`}
				style={{ backgroundImage: `url(${image})`, }}
			>
				<div
					className="absolute inset-0"
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.4)",
						backdropFilter: "blur(4px)",
					}}
				></div>
				<div className={`relative z-10 w-full flex flex-col items-center justify-center color-text-${text_color} px-8 py-8 color-bg-${bg_color} rounded-2xl shadow-2xl`}>{children}</div>
			</div>
		</>
	);
};
