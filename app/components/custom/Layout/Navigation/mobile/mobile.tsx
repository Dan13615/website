// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import getPagesConfigs from "~/data/pageConfig";
import { useState, useEffect } from "react";
import css from "./mobile.module.css";
import { Ellipsis } from "lucide-react";


/* ----- COMPONENTS ----- */
export function NavbarMobile() {
	const pagesConfig = getPagesConfigs();
	const [currentPath, setCurrentPath] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (

		<>
			<div className="fixed top-0 right-0 z-50 p-4 w-full flex items-center justify-between border-b-2 color-border-gold">
				<div>
					<a href="/" onClick={() => setOpen(false)} className="flex items-center">
						<img src="/img/LFB.png" alt="Logo" className="w-8 h-8" />
					</a>
				</div>
				<div onClick={() => setOpen(!open)}>
					<Ellipsis size={32} stroke="var(--color-light)" />
				</div>
			</div>
			<div className={`${open ? css.overlayShow : ''} ${css.overlay}`} onClick={() => setOpen(false)}>
				<div className={`${open ? css.slideIn : css.slideOut} ${css.sidebar}`}>
					<div className={css.navbarLinksContainer}>
						{pagesConfig.map((page) => {
							const isActive = currentPath === page.path;
							return (
								<div key={page.name}>
									<a href={page.path} className={`text-2xl font-extrabold transition-colors duration-500 ${isActive ? "color-text-gold" : "text-white group-hover:text-yellow-300"}`}>
										{page.name}
									</a>
								</div>
							);
						})}
					</div>
					<div className={css.bottom}>
						<img src="/img/LFB_maximise.png" alt="Logo" className="w-22 h-22" />
					</div>
				</div>
			</div>
		</>
	);
}
