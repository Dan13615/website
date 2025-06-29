// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import * as React from "react";
import { PageLayout } from "../PageLayout/PageLayout";

/* ----- PROPS ----- */
interface Props {
	children?: React.ReactNode;
	image: String;
	bg_color?: String;
	text_color?: String;
	title: String;
	subtitle: String;
}

/* ----- COMPONENT ----- */
export default function PageHeaderImage({ bg_color = "gray", text_color = "white", children, title, subtitle, image }: Props) {
	return (
		<PageLayout bg_color={bg_color} text_color={text_color} className="flex flex-col gap-16">
			<h1 className="textStyle-title2 font-bold text-center">{title}</h1>
			<h3 className="textStyle-subtitle2 font-bold">{subtitle}</h3>
			<div className="w-full h-200 rounded-4xl bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
			{children}
		</PageLayout>
	);
}
