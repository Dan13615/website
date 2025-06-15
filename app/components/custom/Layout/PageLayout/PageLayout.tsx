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
  className?: String;
}

interface PropsWithBackground {
  bg_file: String;
  text_color?: String;
  children?: React.ReactNode;
  className?: String;
}

/* ----- COMPONENT ----- */
export function PageLayout({ bg_color = "gray", text_color = "white", children, className }: Props) {
  return <div className={`w-full min-h-screen px-[200px] py-40 flex flex-col items-center justify-center color-bg-${bg_color} color-text-${text_color} ${className}`}>{children}</div>;
}

export function PageLayoutWithBackground({ bg_file, text_color = "white", children, className }: PropsWithBackground) {
  return (
    <div
      className={`w-full min-h-screen relative`}
      style={{
        backgroundImage: `url('/img/${bg_file}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(2px)",
        }}
      ></div>

      <div className={`relative z-10 w-full min-h-screen px-[200px] py-40 flex flex-col items-center justify-center color-text-${text_color} ${className}`}>{children}</div>
    </div>
  );
}
