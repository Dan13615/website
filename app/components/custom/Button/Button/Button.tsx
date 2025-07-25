// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import css from "./Button.module.css";

/* ----- PROPS ----- */
interface Props {
  dataZcAction?: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

/* ----- COMPONENT ----- */
export default function Button({ dataZcAction, label, disabled = false, onClick = () => {}, type = "button" }: Props) {
  return (
    <button onClick={onClick} className={`${css.button} textStyle-buttonText`} disabled={disabled} type={type} data-zc-action={dataZcAction}>
      {label}
    </button>
  );
}
