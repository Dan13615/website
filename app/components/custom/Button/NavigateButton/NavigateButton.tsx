// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import Button from "../Button/Button";

/* ----- PROPS ----- */
interface NavigateButtonProps {
  label: string;
  to?: string;
  zenchefAction?: "open" | "close";
  className?: string;
}

/* ----- COMPONENT ----- */
export default function NavigateButton({ label, to, zenchefAction, className = "" }: NavigateButtonProps) {
  if (zenchefAction) {
    return (
      <button data-zc-action={zenchefAction} className={`btn-primary ${className}`}>
        {label}
      </button>
    );
  }

  if (to?.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`btn-primary ${className}`}>
        {label}
      </a>
    );
  }

  return (
    <a href={to} className={`btn-primary ${className}`}>
      {label}
    </a>
  );
}
