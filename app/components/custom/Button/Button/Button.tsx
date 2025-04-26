// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import css from "./Button.module.css"


/* ----- PROPS ----- */
interface Props {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
};


/* ----- COMPONENT ----- */
export default function Button({ label, disabled = false, onClick = () => { } }: Props) {
	return (
		<button
			onClick={onClick}
			className={`${css.button} textStyle-buttonText`}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
