// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import Button from "../Button/Button";


/* ----- PROPS ----- */
interface Props {
	label: string;
	to: string;
	disabled?: boolean;
};


/* ----- COMPONENT ----- */
export default function NavigateButton({ label, to, disabled = false }: Props) {
	return (
		<a href={to}>
			<Button label={label} disabled={disabled} />
		</a>
	);
};
