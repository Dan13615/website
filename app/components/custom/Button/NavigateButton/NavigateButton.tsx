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
    return <Button dataZcAction={zenchefAction} label={label} />;
  }

  if (to?.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`${className}`}>
        <Button label={label} />
      </a>
    );
  }

  return (
    <a href={to} className={`${className}`}>
      <Button label={label} />
    </a>
  );
}
