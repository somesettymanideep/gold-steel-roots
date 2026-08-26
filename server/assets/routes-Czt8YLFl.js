import { i as siteConfig, n as mapEmbedUrl, r as navLinks, t as mapDirectionsUrl } from "./site-config-8tGX6KyL.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Anvil, ArrowRight, ArrowUp, ArrowUpRight, Award, Building2, Car, Check, ChevronLeft, ChevronRight, Clock, Cpu, Factory, Flame, FlaskConical, Fuel, Handshake, HardHat, Landmark, Mail, MapPin, Menu, Mountain, Package, Phone, Pill, Plane, Quote, Radio, Route, Shield, ShieldCheck, Ship, Signpost, Users, UtensilsCrossed, Wheat, X, Zap } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
var ganesh_logo_jpg_asset_default = {
	asset_id: "79de2df6-09be-46cd-b642-5e7035d8cc50",
	content_type: "image/jpeg",
	created_at: "2026-08-24T11:12:03Z",
	original_filename: "ganesh-logo.jpg",
	project_id: "ffb8759c-aea0-430d-ae18-4653f5397420",
	r2_key: "a/v1/ffb8759c-aea0-430d-ae18-4653f5397420/79de2df6-09be-46cd-b642-5e7035d8cc50/ganesh-logo.jpg",
	size: 153794,
	url: "https://gold-steel-roots.lovable.app/__l5e/assets-v1/79de2df6-09be-46cd-b642-5e7035d8cc50/ganesh-logo.jpg",
	version: 1
};
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/site/Header.tsx
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("fixed inset-x-0 top-0 z-50 bg-background transition-all duration-300", scrolled ? "shadow-[0_6px_24px_oklch(0_0_0/0.10)]" : "shadow-[0_1px_0_var(--border)]"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#home",
					className: cn("flex shrink-0 items-center transition-all duration-300", scrolled ? "py-2" : "py-3"),
					"aria-label": `${siteConfig.name} home`,
					children: /* @__PURE__ */ jsx("img", {
						src: ganesh_logo_jpg_asset_default.url,
						alt: "Ganesh Trading Company logo",
						width: 200,
						height: 200,
						className: cn("w-auto transition-all duration-300", scrolled ? "h-16 sm:h-18" : "h-18 sm:h-22")
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "ml-auto hidden items-center gap-7 lg:flex",
					"aria-label": "Main navigation",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: "relative text-sm font-semibold text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "ml-auto flex items-center gap-2 sm:gap-3 lg:ml-6",
					children: [/* @__PURE__ */ jsxs("a", {
						href: siteConfig.phoneHref,
						className: "flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-xs font-bold text-ink transition-all hover:bg-gold-dark hover:scale-[1.02] active:scale-[0.98] sm:px-4 sm:text-sm",
						children: [
							/* @__PURE__ */ jsx(Phone, {
								className: "size-4 shrink-0 text-ink",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "hidden sm:inline",
								children: siteConfig.phone
							}),
							/* @__PURE__ */ jsx("span", {
								className: "sm:hidden",
								children: "Call Us"
							})
						]
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "grid size-11 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden",
						children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ jsx("nav", {
				className: "mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6",
				"aria-label": "Mobile navigation",
				children: navLinks.map((link) => /* @__PURE__ */ jsx("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/70 py-3 text-base font-semibold text-foreground/85 transition-colors last:border-0 hover:text-gold-dark",
					children: link.label
				}, link.href))
			})
		})]
	});
}
//#endregion
//#region src/components/site/Hero.tsx
var slides = [
	{
		image: {
			version: 1,
			asset_id: "cc7aac23-5461-4b68-9ff1-b568a1434316",
			project_id: "ffb8759c-aea0-430d-ae18-4653f5397420",
			url: "https://gold-steel-roots.lovable.app/__l5e/assets-v1/cc7aac23-5461-4b68-9ff1-b568a1434316/hero-ppe-fire.png",
			r2_key: "a/v1/ffb8759c-aea0-430d-ae18-4653f5397420/cc7aac23-5461-4b68-9ff1-b568a1434316/hero-ppe-fire.png",
			original_filename: "hero-ppe-fire.png",
			size: 2032668,
			content_type: "image/png",
			created_at: "2026-08-25T07:06:04Z"
		}.url,
		alt: "Safety helmet, hi-vis vest, safety boots, gloves, goggles, respirator, fire extinguisher and first aid kit",
		eyebrow: "Safety & Fire Equipment",
		title: "Complete Personal Protective & Fire Safety Equipment",
		text: "Helmets, safety shoes, hand gloves, goggles, respirators, hi-vis jackets, fire extinguishers, hose reels and first aid kits — certified protection for every worksite.",
		primary: {
			label: "Explore Safety Range",
			href: "#products"
		},
		secondary: {
			label: "Get a Quote",
			href: "#contact"
		}
	},
	{
		image: {
			version: 1,
			asset_id: "781ae48b-a905-40c3-ad5e-63f373647746",
			project_id: "ffb8759c-aea0-430d-ae18-4653f5397420",
			url: "https://gold-steel-roots.lovable.app/__l5e/assets-v1/781ae48b-a905-40c3-ad5e-63f373647746/hero-road-safety.png",
			r2_key: "a/v1/ffb8759c-aea0-430d-ae18-4653f5397420/781ae48b-a905-40c3-ad5e-63f373647746/hero-road-safety.png",
			original_filename: "hero-road-safety.png",
			size: 2169955,
			content_type: "image/png",
			created_at: "2026-08-25T07:06:09Z"
		}.url,
		alt: "Road safety barricade, traffic cones, speed breaker, road studs and queue barriers on a highway",
		eyebrow: "Road Safety Products",
		title: "Road Safety & Traffic Management Solutions",
		text: "Traffic cones, barricades, speed breakers, road studs, delineators and retractable barriers to keep roads, plants and construction zones safe.",
		primary: {
			label: "View Road Safety",
			href: "#products"
		},
		secondary: {
			label: "Contact Us",
			href: siteConfig.phoneHref
		}
	},
	{
		image: {
			version: 1,
			asset_id: "787ba87c-96b0-4666-9cd0-04a589f33a0d",
			project_id: "ffb8759c-aea0-430d-ae18-4653f5397420",
			url: "https://gold-steel-roots.lovable.app/__l5e/assets-v1/787ba87c-96b0-4666-9cd0-04a589f33a0d/hero-welding.png",
			r2_key: "a/v1/ffb8759c-aea0-430d-ae18-4653f5397420/787ba87c-96b0-4666-9cd0-04a589f33a0d/hero-welding.png",
			original_filename: "hero-welding.png",
			size: 2003400,
			content_type: "image/png",
			created_at: "2026-08-25T07:06:14Z"
		}.url,
		alt: "Welding rectifier, transformer, inverter MIG/TIG welding machines, generator, electrodes and welding accessories",
		eyebrow: "Welding & Power Solutions",
		title: "Welding Machines, Consumables & Power Equipment",
		text: "Rectifiers, transformers, IGBT inverters, MIG/TIG machines, generators, electrodes, wires, torches and regulators from authorised brands.",
		primary: {
			label: "Welding Products",
			href: "#products"
		},
		secondary: {
			label: "Talk to Us",
			href: siteConfig.phoneHref
		}
	}
];
function Hero() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const touchStart = useRef(null);
	const go = useCallback((next) => {
		setIndex((next + slides.length) % slides.length);
	}, []);
	useEffect(() => {
		if (paused) return;
		const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
		return () => window.clearInterval(id);
	}, [paused, index]);
	return /* @__PURE__ */ jsx("section", {
		id: "home",
		"aria-label": "Ganesh Trading Company highlights",
		className: "relative isolate overflow-hidden bg-ink",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onTouchStart: (e) => {
			touchStart.current = e.touches[0]?.clientX ?? null;
		},
		onTouchEnd: (e) => {
			const start = touchStart.current;
			const end = e.changedTouches[0]?.clientX;
			if (start == null || end == null) return;
			if (Math.abs(end - start) > 45) go(end < start ? index + 1 : index - 1);
			touchStart.current = null;
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative h-[88vh] min-h-[560px] w-full sm:h-[92vh]",
			children: [
				slides.map((slide, i) => /* @__PURE__ */ jsxs("div", {
					className: cn("absolute inset-0 transition-opacity duration-[1100ms] ease-out", i === index ? "opacity-100" : "pointer-events-none opacity-0"),
					"aria-hidden": i !== index,
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 overflow-hidden",
							children: /* @__PURE__ */ jsx("img", {
								src: slide.image,
								alt: slide.alt,
								width: 1920,
								height: 1088,
								loading: i === 0 ? "eager" : "lazy",
								fetchPriority: i === 0 ? "high" : "low",
								className: cn("size-full object-cover", i === index && "ken-burns")
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,oklch(0.09_0_0/0.92)_0%,oklch(0.09_0_0/0.78)_45%,oklch(0.09_0_0/0.45)_100%)]" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_top,oklch(0.09_0_0/0.85),transparent_55%)]" }),
						/* @__PURE__ */ jsx("div", {
							className: "relative mx-auto flex h-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8",
							children: /* @__PURE__ */ jsxs("div", {
								className: "max-w-3xl",
								children: [
									/* @__PURE__ */ jsxs("p", {
										className: cn("reveal reveal-up flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold uppercase", i === index && "is-revealed"),
										style: { transitionDelay: "120ms" },
										children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-gold" }), slide.eyebrow]
									}),
									/* @__PURE__ */ jsx("h1", {
										className: cn("reveal reveal-up heading-xl mt-5 text-white", i === index && "is-revealed"),
										style: { transitionDelay: "240ms" },
										children: slide.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: cn("reveal reveal-up mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg", i === index && "is-revealed"),
										style: { transitionDelay: "380ms" },
										children: slide.text
									}),
									/* @__PURE__ */ jsxs("div", {
										className: cn("reveal reveal-up mt-9 flex flex-wrap gap-3", i === index && "is-revealed"),
										style: { transitionDelay: "520ms" },
										children: [/* @__PURE__ */ jsxs("a", {
											href: slide.primary.href,
											className: "btn-base btn-gold",
											children: [slide.primary.label, /* @__PURE__ */ jsx(ArrowRight, {
												className: "size-4",
												"aria-hidden": "true"
											})]
										}), /* @__PURE__ */ jsx("a", {
											href: slide.secondary.href,
											className: "btn-base btn-ghost-light",
											children: slide.secondary.label
										})]
									})
								]
							})
						})
					]
				}, slide.title)),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => go(index - 1),
					"aria-label": "Previous slide",
					className: "absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-ink md:grid lg:left-6",
					children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-6" })
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => go(index + 1),
					"aria-label": "Next slide",
					className: "absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-ink md:grid lg:right-6",
					children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-6" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3",
					children: slides.map((slide, i) => /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => go(i),
						"aria-label": `Go to slide ${i + 1}`,
						"aria-current": i === index,
						className: cn("h-1.5 rounded-full transition-all duration-300", i === index ? "w-10 bg-gold" : "w-4 bg-white/45 hover:bg-white/80")
					}, slide.title))
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/Stats.tsx
var stats = [
	{
		value: 71,
		suffix: "+",
		label: [
			"Years of",
			"Industry",
			"Experience"
		],
		icon: Award
	},
	{
		value: 1e3,
		suffix: "+",
		label: ["Industrial", "Products"],
		icon: Package
	},
	{
		value: 100,
		suffix: "+",
		label: ["Authorised", "Brands"],
		icon: ShieldCheck
	},
	{
		value: 100,
		suffix: "%",
		label: ["Customer", "Satisfaction"],
		icon: Users
	}
];
function useInView() {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setInView(true);
				obs.disconnect();
			}
		}, { threshold: .35 });
		obs.observe(node);
		return () => obs.disconnect();
	}, []);
	return {
		ref,
		inView
	};
}
function CountUp({ target, suffix }) {
	const [value, setValue] = useState(0);
	const { ref, inView } = useInView();
	useEffect(() => {
		if (!inView) return;
		const duration = 1400;
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, target]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [value, suffix]
	});
}
function Hexagon({ icon: Icon }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative grid size-20 shrink-0 place-items-center sm:size-[5.5rem]",
		children: [/* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 100 100",
			className: "absolute inset-0 size-full text-gold",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("polygon", {
				points: "50,4 92,27 92,73 50,96 8,73 8,27",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "4",
				strokeLinejoin: "round"
			})
		}), /* @__PURE__ */ jsx(Icon, { className: "relative size-8 text-gold stroke-[1.5] sm:size-9" })]
	});
}
function Stats() {
	return /* @__PURE__ */ jsx("section", {
		"aria-label": "Company statistics",
		className: "bg-background py-12 lg:py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-xl bg-ink shadow-[0_20px_50px_-20px_oklch(0_0_0_/_0.55)]",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-0 opacity-70",
						style: { background: "radial-gradient(120% 140% at 0% 50%, oklch(0.742 0.152 76.5 / 0.14), transparent 45%), radial-gradient(120% 140% at 100% 50%, oklch(0.742 0.152 76.5 / 0.10), transparent 45%)" }
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative grid grid-cols-1 gap-y-8 px-6 py-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-2 lg:px-8",
						children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", {
							className: cn("flex items-center justify-center gap-4 px-2 sm:justify-start", i > 0 && "lg:border-l lg:border-white/15", i % 2 !== 0 && "sm:border-l sm:border-white/15 lg:border-l"),
							children: [/* @__PURE__ */ jsx(Hexagon, { icon: stat.icon }), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-gold sm:text-[1.75rem]",
									children: typeof stat.value === "number" ? /* @__PURE__ */ jsx(CountUp, {
										target: stat.value,
										suffix: stat.suffix
									}) : stat.text
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 font-display text-[11px] font-bold uppercase leading-snug tracking-wide text-white sm:text-xs",
									children: stat.label.map((line) => /* @__PURE__ */ jsx("span", {
										className: "block",
										children: line
									}, line))
								})]
							})]
						}, stat.label.join(" ")))
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "h-[3px] w-full",
						style: { background: "linear-gradient(90deg, transparent, oklch(0.742 0.152 76.5 / 0.35) 15%, oklch(0.85 0.16 85) 50%, oklch(0.742 0.152 76.5 / 0.35) 85%, transparent)" }
					})
				]
			})
		})
	});
}
//#endregion
//#region src/components/Reveal.tsx
var dirClass = {
	up: "reveal-up",
	left: "reveal-left",
	right: "reveal-right",
	scale: "reveal-scale"
};
function Reveal({ children, as: Tag = "div", direction = "up", delay = 0, className }) {
	const ref = useRef(null);
	const [shown, setShown] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShown(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", dirClass[direction], shown && "is-revealed", className),
		children
	});
}
//#endregion
//#region src/components/site/Partners.tsx
var partners = [
	{
		name: "Ador Welding",
		logo: "/partners/ador.jpg"
	},
	{
		name: "Addison",
		logo: "/partners/addison.png"
	},
	{
		name: "Stanley Black & Decker",
		logo: "/partners/stanley.png"
	},
	{ name: "Growskey Enterprises" },
	{
		name: "KPT Sales & Services Ltd.",
		logo: "/partners/kpt.png"
	},
	{ name: "Sprayfill India Pvt. Ltd." },
	{
		name: "Taparia",
		logo: "/partners/taparia.png"
	},
	{
		name: "De Neers",
		logo: "/partners/deneers.jpg"
	},
	{
		name: "Satyam Composites",
		logo: "/partners/satyam.png"
	},
	{
		name: "Eibenstock Positron",
		logo: "/partners/eibenstock.png"
	},
	{
		name: "Nilkamal",
		logo: "/partners/nilkamal.jpg"
	}
];
function LogoTile({ name, logo }) {
	return /* @__PURE__ */ jsx("div", {
		className: "group grid h-24 w-40 shrink-0 place-items-center rounded-md border border-border bg-card px-5 transition-all duration-300 hover:border-gold hover:shadow-[var(--shadow-card-hover)] sm:w-44",
		children: logo ? /* @__PURE__ */ jsx("img", {
			src: logo,
			alt: `${name} logo`,
			className: "max-h-14 max-w-[90%] object-contain",
			loading: "lazy"
		}) : /* @__PURE__ */ jsx("span", {
			className: "text-center font-display text-base font-bold leading-tight tracking-wide text-muted-foreground transition-colors group-hover:text-gold-dark",
			children: name
		})
	});
}
function Partners() {
	return /* @__PURE__ */ jsx("section", {
		id: "partners",
		className: "bg-surface py-20 lg:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow justify-center",
							children: "Trusted Brands"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "heading-lg mt-4 text-ink",
							children: "Our Authorised Partners"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-rule mx-auto mt-5 block" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: "Partnering with trusted brands to deliver dependable industrial solutions."
						})
					]
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 120,
					className: "marquee-container mt-12 overflow-hidden",
					children: /* @__PURE__ */ jsx("div", {
						className: "marquee-track-slow flex w-max items-center gap-4",
						children: [
							...partners,
							...partners,
							...partners,
							...partners
						].map((partner, i) => /* @__PURE__ */ jsx(LogoTile, {
							name: partner.name,
							logo: partner.logo
						}, `${partner.name}-${i}`))
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "btn-base btn-ghost-ink",
						children: "View All Partners"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/About.tsx
var highlights = [
	"71+ Years of Experience",
	"Trusted Industrial Supplier",
	"Authorised Brand Partnerships",
	"Comprehensive Product Range",
	"Quality-Assured Products"
];
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "bg-surface py-20 lg:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				direction: "left",
				className: "relative",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -top-5 -left-5 hidden h-32 w-32 border-t-4 border-l-4 border-gold sm:block" }),
					/* @__PURE__ */ jsx("div", { className: "absolute -right-5 -bottom-5 hidden h-32 w-32 border-r-4 border-b-4 border-gold sm:block" }),
					/* @__PURE__ */ jsx("img", {
						src: "/about-company.jpg",
						alt: "Ganesh Trading Company product showcase, 71 years of trust, and business highlights",
						width: 1200,
						height: 1e3,
						loading: "lazy",
						className: "relative w-full rounded-md object-cover shadow-[var(--shadow-card-hover)]"
					})
				]
			}), /* @__PURE__ */ jsxs(Reveal, {
				direction: "right",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "About Ganesh Trading Company"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "heading-lg mt-4 text-ink",
						children: "Over Seven Decades of Trust, Quality & Industrial Expertise"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mt-5 block" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-base leading-relaxed text-muted-foreground",
						children: "Ganesh Trading Company is a trusted distributor and stockist with over 71 years of industry experience. We provide a comprehensive range of safety equipment, fire equipment, welding solutions, engineering machinery, cutting and power tools, pumps, spray systems and industrial products."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "With a commitment to quality, reliability and customer satisfaction, we serve businesses and industries across diverse sectors with dependable products and professional service."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: highlights.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold/15",
								children: /* @__PURE__ */ jsx(Check, {
									className: "size-3.5 text-gold-dark",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-semibold text-ink",
								children: item
							})]
						}, item))
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/site/Founder.tsx
function Founder() {
	return /* @__PURE__ */ jsx("section", {
		id: "founder",
		className: "bg-background py-20 lg:py-24 border-t border-border",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsxs(Reveal, {
						direction: "left",
						className: "relative mx-auto max-w-sm",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 -z-10 size-full rounded-md border-2 border-gold/30" }),
							/* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -right-4 -z-10 size-full rounded-md border-2 border-gold" }),
							/* @__PURE__ */ jsxs("div", {
								className: "overflow-hidden rounded-md bg-card shadow-[var(--shadow-card-hover)]",
								children: [/* @__PURE__ */ jsx("img", {
									src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=750",
									alt: "Shri Dwarka Prasad Gupta - Founder of Ganesh Trading Company",
									width: 600,
									height: 750,
									loading: "lazy",
									className: "aspect-[4/5] w-full object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
								}), /* @__PURE__ */ jsxs("div", {
									className: "bg-ink p-6 text-center",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-bold text-white",
										children: "Shri Dwarka Prasad Gupta"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs font-semibold uppercase tracking-wider text-gold",
										children: "Founder"
									})]
								})]
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ jsxs(Reveal, {
						direction: "right",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Our Legacy & Vision"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "heading-lg mt-4 text-ink",
								children: "Honoring Our Founder's Pioneering Vision"
							}),
							/* @__PURE__ */ jsx("span", { className: "gold-rule mt-5 block" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative mt-8 rounded-lg bg-surface p-6 sm:p-8 border-l-4 border-gold",
								children: [/* @__PURE__ */ jsx(Quote, {
									className: "absolute -top-3 -right-1 size-12 rotate-180 text-gold/10",
									"aria-hidden": "true"
								}), /* @__PURE__ */ jsx("blockquote", {
									className: "relative z-10 font-display text-base font-medium italic leading-relaxed text-ink sm:text-lg",
									children: "\"Quality is not an act, it is a habit. We must build relationships based on trust, deliver products that secure lives, and always stand by the commitments we make to our partners and industries.\""
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-base leading-relaxed text-muted-foreground",
								children: "In 1955, under the visionary leadership of Shri Dwarka Prasad Gupta, Ganesh Trading Company embarked on its journey to bring world-class industrial products to Vijayawada. Built on the pillars of integrity, reliability, and unparalleled customer service, he transformed a modest trading house into a leading distributor."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-base leading-relaxed text-muted-foreground",
								children: "Today, his principles continue to guide us as we adapt to modern industrial demands. We carry forward his legacy of trust and dedication, ensuring our partners receive only the finest safety, welding, and engineering solutions."
							})
						]
					})
				})]
			})
		})
	});
}
//#endregion
//#region src/components/site/Products.tsx
var categories = [
	{
		name: "Road & Traffic Safety Equipment",
		image: "/assets/cat-road-VcxO4C5r.jpg",
		alt: "Traffic cones and barricades on a highway safety work zone",
		description: "Highway and work-zone safety products for contractors and civic projects.",
		items: [
			"Traffic Cones",
			"Barricades",
			"Cat Eyes",
			"Speed Breakers",
			"Delineators",
			"Queue Managers"
		]
	},
	{
		name: "Safety & Fire Equipment",
		image: "/assets/cat-safety-BvsPk-xf.jpg",
		alt: "Hard hat, safety gloves, goggles, ear protection and fire extinguishers",
		description: "Complete personal protective equipment and fire fighting solutions.",
		items: [
			"Leather, Rubber, Cotton & PVC Gloves",
			"Helmets",
			"Gum Boots & Industrial Shoes",
			"Nose & Dust Masks",
			"Goggles & Ear Plugs",
			"Safety Jackets",
			"First Aid Kits",
			"Fire Fighting Equipment"
		]
	},
	{
		name: "Welding Solutions",
		image: "/assets/cat-welding-Ct3poT5S.jpg",
		alt: "MIG welding machine with sparks in an industrial workshop",
		description: "Welding machines, consumables and gas cutting equipment.",
		items: [
			"Electrodes",
			"Welding Transformers",
			"Generators & Rectifiers",
			"MIG / TIG Welding Machines",
			"Gas Cutting Equipment",
			"MIG Wire & Filler Wire"
		]
	},
	{
		name: "Cutting & Power Tools",
		image: "/assets/cat-tools-2yf1TEb6.jpg",
		alt: "Cordless drill, angle grinder and circular saw on a workbench",
		description: "Professional power tools, cutting tools and branded hand tools.",
		items: [
			"Drilling Machines",
			"Angle Grinders",
			"Chop & Circular Saws",
			"Routers & Jig Saws",
			"End Mills, Milling Cutters",
			"Reamers & Taps",
			"Hand Tools — Taparia",
			"Hand Tools — De Neers"
		]
	},
	{
		name: "Engineering Machinery & Tools",
		image: "/assets/cat-machinery-B07r5pC_.jpg",
		alt: "Engineering workshop with lathes, compressors and bench grinders",
		description: "Workshop machinery, compressors and allied engineering tools.",
		items: [
			"Wood Surface Planers & Lathes",
			"Air & Painting Compressors",
			"Marble & Stone Polishing Machines",
			"Papad & Popcorn Machines",
			"Masonry Drills & Tile Cutter Blades",
			"Wire Brushes & Rivet Guns",
			"Bench Grinders",
			"Paints & Emery Papers"
		]
	},
	{
		name: "Pumps & Spray Systems",
		image: "/assets/cat-pumps-Bn3SEKrF.jpg",
		alt: "Barrel hand pumps, grease guns and spray guns on a workshop bench",
		description: "Lubrication, transfer pumps, spray systems and test materials.",
		items: [
			"Barrel Hand Pumps",
			"Rotary, Piston & Lever Type Pumps",
			"Grease Guns & Dip Rods",
			"Spray Guns",
			"D.P.T. Test Materials",
			"Anticipators"
		]
	}
];
function Products() {
	return /* @__PURE__ */ jsx("section", {
		id: "products",
		className: "bg-background py-20 lg:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow justify-center",
						children: "Product Range"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "heading-lg mt-4 text-ink",
						children: "Our Product Range"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mx-auto mt-5 block" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: "Complete Industrial Solutions Under One Roof"
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
				children: categories.map((cat, i) => /* @__PURE__ */ jsxs(Reveal, {
					as: "article",
					delay: i % 3 * 110,
					className: "card-industrial group flex flex-col overflow-hidden",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-16/10 overflow-hidden",
						children: [/* @__PURE__ */ jsx("img", {
							src: cat.image,
							alt: cat.alt,
							width: 1024,
							height: 768,
							loading: "lazy",
							className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_top,oklch(0.09_0_0/0.6),transparent_60%)]" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-1 flex-col p-6",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-lg font-bold text-ink",
								children: cat.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: cat.description
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-4 space-y-1.5",
								children: cat.items.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" }), item]
								}, item))
							})
						]
					})]
				}, cat.name))
			})]
		})
	});
}
//#endregion
//#region src/components/site/Industries.tsx
var industries = [
	{
		name: "Aerospace & Aviation",
		Icon: Plane
	},
	{
		name: "Automobile & Auto Ancillary",
		Icon: Car
	},
	{
		name: "Construction",
		Icon: HardHat
	},
	{
		name: "Cement Plant",
		Icon: Factory
	},
	{
		name: "Defence & Security",
		Icon: Shield
	},
	{
		name: "Electronics & IT",
		Icon: Cpu
	},
	{
		name: "Food & Beverage",
		Icon: UtensilsCrossed
	},
	{
		name: "Heavy Engineering",
		Icon: Anvil
	},
	{
		name: "Highway & Road",
		Icon: Route
	},
	{
		name: "Parking",
		Icon: Signpost
	},
	{
		name: "Mining",
		Icon: Mountain
	},
	{
		name: "Metallurgy",
		Icon: Flame
	},
	{
		name: "Oil & Gas",
		Icon: Fuel
	},
	{
		name: "Chemical",
		Icon: FlaskConical
	},
	{
		name: "Pharmaceutical",
		Icon: Pill
	},
	{
		name: "Power Transmission",
		Icon: Zap
	},
	{
		name: "Shipping",
		Icon: Ship
	},
	{
		name: "Telecom Tower",
		Icon: Radio
	},
	{
		name: "Sugar",
		Icon: Wheat
	},
	{
		name: "Tobacco",
		Icon: Package
	},
	{
		name: "Thermal Stations",
		Icon: Factory
	},
	{
		name: "Police Department",
		Icon: ShieldCheck
	},
	{
		name: "Temples",
		Icon: Landmark
	},
	{
		name: "Builders",
		Icon: Building2
	}
];
function Industries() {
	return /* @__PURE__ */ jsx("section", {
		id: "industries",
		className: "bg-ink py-20 lg:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow justify-center !text-gold",
						children: "Sectors We Support"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "heading-lg mt-4 text-white",
						children: "Industries We Serve"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mx-auto mt-5 block" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-white/70",
						children: "Supporting Critical Industries With Reliable Industrial Solutions"
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: industries.map(({ name, Icon }, i) => /* @__PURE__ */ jsxs(Reveal, {
					delay: i % 4 * 80,
					className: "group relative flex items-center gap-3 rounded-md border border-white/12 bg-white/4 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:bg-white/8 hover:shadow-[0_0_0_1px_var(--gold),0_16px_40px_oklch(0.742_0.152_76.5/0.18)]",
					children: [
						/* @__PURE__ */ jsx(Icon, {
							className: "size-6 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110",
							strokeWidth: 1.5,
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "min-w-0 text-sm font-semibold text-white/90",
							children: name
						}),
						/* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-auto size-4 shrink-0 text-white/30 transition-all duration-300 group-hover:text-gold" })
					]
				}, name))
			})]
		})
	});
}
//#endregion
//#region src/components/site/WhyUs.tsx
var features = [
	{
		icon: /* @__PURE__ */ jsx("span", {
			className: "font-display text-2xl font-extrabold text-ink",
			children: "71+"
		}),
		title: "71+ Years of Industry Experience",
		text: "Decades of experience and trusted relationships across a wide range of industrial sectors."
	},
	{
		icon: /* @__PURE__ */ jsx(Handshake, {
			className: "size-8 text-ink",
			strokeWidth: 1.5,
			"aria-hidden": "true"
		}),
		title: "Authorised Brand Partnerships",
		text: "Partnering with globally trusted and established brands to deliver reliable, high-performance products."
	},
	{
		icon: /* @__PURE__ */ jsx(Package, {
			className: "size-8 text-ink",
			strokeWidth: 1.5,
			"aria-hidden": "true"
		}),
		title: "Comprehensive Product Range",
		text: "Safety equipment, welding solutions, engineering machinery, power tools and industrial products under one roof."
	},
	{
		icon: /* @__PURE__ */ jsx(ShieldCheck, {
			className: "size-8 text-ink",
			strokeWidth: 1.5,
			"aria-hidden": "true"
		}),
		title: "Reliable Quality & Customer Experience",
		text: "Committed to quality products, professional service and long-term customer relationships."
	}
];
function WhyUs() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-gradient-to-b from-surface to-background py-20 lg:py-28",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-y-0 right-0 hidden w-56 opacity-[0.18] lg:block",
			style: {
				backgroundImage: "radial-gradient(var(--gold) 1.5px, transparent 1.5px)",
				backgroundSize: "16px 16px"
			},
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "eyebrow justify-center",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "h-px w-8 bg-gold",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								"aria-hidden": "true",
								children: "•"
							}),
							"Why Choose Us",
							/* @__PURE__ */ jsx("span", {
								className: "text-gold",
								"aria-hidden": "true",
								children: "•"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "h-px w-8 bg-gold",
								"aria-hidden": "true"
							})
						]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "heading-lg mt-4 text-ink uppercase",
						children: ["Why Choose ", /* @__PURE__ */ jsx("span", {
							className: "text-gold",
							children: "Ganesh Trading Company?"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: "Experience, Quality and Reliability You Can Trust"
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: features.map(({ icon, title, text }, i) => /* @__PURE__ */ jsxs(Reveal, {
					delay: i * 110,
					className: "card-industrial group flex flex-col items-center border-b-[3px] border-b-gold bg-gradient-to-b from-card to-surface p-8 text-center",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "grid size-20 place-items-center rounded-full border-2 border-gold/70 bg-background transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10",
							children: icon
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display mt-6 text-sm font-bold tracking-wide text-ink uppercase",
							children: title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: text
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-rule mt-6 block w-10" })
					]
				}, title))
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Testimonials.tsx
var testimonials = [
	{
		quote: "Ganesh Trading Company has been our trusted supplier for safety equipment and welding solutions for years. Their product quality and prompt service are unmatched in Vijayawada.",
		author: "Ramesh Kumar",
		role: "Plant Manager, Engineering Workshop"
	},
	{
		quote: "We rely on them for everything from fire safety gear to industrial power tools. Their team understands our requirements and always delivers the right products on time.",
		author: "Suresh Reddy",
		role: "Procurement Head, Manufacturing Unit"
	},
	{
		quote: "A dependable partner with decades of industrial expertise. Their guidance helped us choose the right machinery and safety equipment for our facility.",
		author: "Anil Sharma",
		role: "Operations Director, Construction Firm"
	}
];
function Testimonials() {
	return /* @__PURE__ */ jsxs("section", {
		id: "testimonials",
		className: "bg-surface py-20 lg:py-28",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow justify-center",
						children: "Testimonials"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "heading-lg mt-4 text-ink",
						children: "What Our Clients Say"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mx-auto mt-5 block" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: "Trusted by industries across Vijayawada and beyond."
					})
				]
			})
		}), /* @__PURE__ */ jsx(Reveal, {
			delay: 120,
			className: "mt-14 overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "marquee-track flex w-max items-stretch gap-6 px-4 sm:px-6 lg:px-8",
				children: [...testimonials, ...testimonials].map((t, i) => /* @__PURE__ */ jsxs("div", {
					className: "card-industrial relative w-[85vw] max-w-md shrink-0 p-8 sm:w-[45vw] lg:w-[30vw]",
					children: [
						/* @__PURE__ */ jsx(Quote, {
							className: "absolute top-5 left-5 size-9 text-gold/25 sm:size-10",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsxs("blockquote", {
							className: "relative z-10 text-base leading-relaxed text-ink",
							children: [
								"“",
								t.quote,
								"”"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative z-10 mt-6",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-base font-bold text-ink",
								children: t.author
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t.role
							})]
						})
					]
				}, `${t.author}-${i}`))
			})
		})]
	});
}
//#endregion
//#region src/assets/banner-legacy.jpg
var banner_legacy_default = "/assets/banner-legacy-ByUpzMV0.jpg";
//#endregion
//#region src/components/site/LegacyBanner.tsx
function LegacyBanner() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-ink py-24 lg:py-32",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: banner_legacy_default,
				alt: "Industrial warehouse stocked with machinery and safety equipment",
				width: 1920,
				height: 1080,
				loading: "lazy",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,oklch(0.09_0_0/0.92),oklch(0.09_0_0/0.62))]" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs(Reveal, {
					direction: "left",
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow !text-gold",
							children: "Our Legacy"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "heading-lg mt-4 text-white",
							children: "71+ Years of Industrial Excellence"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-rule mt-5 block" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg",
							children: "A legacy built on trust, quality and dependable industrial solutions."
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "btn-base btn-gold mt-8",
							children: "Partner With Us"
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/components/site/Contact.tsx
var fieldClass = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";
function Contact() {
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);
	const details = [
		{
			icon: Phone,
			label: "Phone",
			value: siteConfig.phone,
			href: siteConfig.phoneHref
		},
		{
			icon: Mail,
			label: "Email",
			value: siteConfig.email,
			href: `mailto:${siteConfig.email}`
		},
		{
			icon: MapPin,
			label: "Address",
			value: siteConfig.address,
			href: mapDirectionsUrl
		},
		{
			icon: Clock,
			label: "Business Hours",
			value: siteConfig.hours
		}
	];
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const get = (k) => String(data.get(k) ?? "").trim();
		const next = {};
		if (get("name").length < 2) next.name = "Please enter your full name.";
		if (!/^[+\d][\d\s-]{7,}$/.test(get("phone"))) next.phone = "Enter a valid phone number.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Enter a valid email address.";
		if (get("message").length < 10) next.message = "Please describe your requirement (10+ characters).";
		setErrors(next);
		if (Object.keys(next).length > 0) {
			setSent(false);
			return;
		}
		const msg = `*New Enquiry from Website*
----------------------------------------
*Name:* ${get("name")}
*Company:* ${get("company") || "Not specified"}
*Phone:* ${get("phone")}
*Email:* ${get("email")}
*Industry:* ${get("industry") || "Not specified"}
*Requirement:* ${get("requirement") || "Not specified"}
*Message:* ${get("message")}`;
		const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
		window.open(url, "_blank");
		setSent(true);
		form.reset();
	}
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "bg-surface py-20 lg:py-28",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				direction: "left",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Contact Us"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "heading-lg mt-4 text-ink",
						children: "Let's Discuss Your Industrial Requirements"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mt-5 block" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: "Whether you need safety equipment, welding solutions, engineering machinery, power tools or industrial supplies, our team is ready to help."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-9 space-y-5",
						children: details.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-11 shrink-0 place-items-center rounded-md bg-ink text-gold",
								children: /* @__PURE__ */ jsx(Icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold tracking-widest text-muted-foreground uppercase",
								children: label
							}), href ? /* @__PURE__ */ jsx("a", {
								href,
								className: "mt-1 block text-base font-semibold text-ink transition-colors hover:text-gold-dark",
								children: value
							}) : /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-base font-semibold text-ink",
								children: value
							})] })]
						}, label))
					})
				]
			}), /* @__PURE__ */ jsxs(Reveal, {
				direction: "right",
				className: "card-industrial p-6 sm:p-8",
				children: [
					/* @__PURE__ */ jsx("span", {
						id: "contact-form",
						className: "block scroll-mt-28"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-xl font-bold text-ink",
						children: "Send Us Your Enquiry"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "We will get back to you shortly."
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						onSubmit,
						noValidate: true,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-1",
								children: [
									/* @__PURE__ */ jsx("label", {
										htmlFor: "name",
										className: "text-sm font-semibold text-ink",
										children: "Full Name"
									}),
									/* @__PURE__ */ jsx("input", {
										id: "name",
										name: "name",
										className: cn(fieldClass, "mt-2"),
										placeholder: "Your name"
									}),
									errors.name && /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.name
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "company",
								className: "text-sm font-semibold text-ink",
								children: "Company Name"
							}), /* @__PURE__ */ jsx("input", {
								id: "company",
								name: "company",
								className: cn(fieldClass, "mt-2"),
								placeholder: "Company"
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "phone",
									className: "text-sm font-semibold text-ink",
									children: "Phone Number"
								}),
								/* @__PURE__ */ jsx("input", {
									id: "phone",
									name: "phone",
									type: "tel",
									className: cn(fieldClass, "mt-2"),
									placeholder: "+91 ..."
								}),
								errors.phone && /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-destructive",
									children: errors.phone
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "email",
									className: "text-sm font-semibold text-ink",
									children: "Email Address"
								}),
								/* @__PURE__ */ jsx("input", {
									id: "email",
									name: "email",
									type: "email",
									className: cn(fieldClass, "mt-2"),
									placeholder: "you@company.com"
								}),
								errors.email && /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-destructive",
									children: errors.email
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "industry",
								className: "text-sm font-semibold text-ink",
								children: "Industry"
							}), /* @__PURE__ */ jsxs("select", {
								id: "industry",
								name: "industry",
								className: cn(fieldClass, "mt-2"),
								defaultValue: "",
								children: [/* @__PURE__ */ jsx("option", {
									value: "",
									children: "Select industry"
								}), industries.map((industry) => /* @__PURE__ */ jsx("option", {
									value: industry.name,
									children: industry.name
								}, industry.name))]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "requirement",
								className: "text-sm font-semibold text-ink",
								children: "Product / Requirement"
							}), /* @__PURE__ */ jsxs("select", {
								id: "requirement",
								name: "requirement",
								className: cn(fieldClass, "mt-2"),
								defaultValue: "",
								children: [/* @__PURE__ */ jsx("option", {
									value: "",
									children: "Select category"
								}), categories.map((cat) => /* @__PURE__ */ jsx("option", {
									value: cat.name,
									children: cat.name
								}, cat.name))]
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-2",
								children: [
									/* @__PURE__ */ jsx("label", {
										htmlFor: "message",
										className: "text-sm font-semibold text-ink",
										children: "Message"
									}),
									/* @__PURE__ */ jsx("textarea", {
										id: "message",
										name: "message",
										rows: 4,
										className: cn(fieldClass, "mt-2 resize-y"),
										placeholder: "Tell us about your requirement, quantities and timelines."
									}),
									errors.message && /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-destructive",
										children: errors.message
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "btn-base btn-gold w-full sm:w-auto",
									children: "Send Enquiry"
								}), /* @__PURE__ */ jsx("p", {
									role: "status",
									"aria-live": "polite",
									className: cn("mt-4 text-sm font-semibold", sent ? "text-gold-dark" : "text-transparent"),
									children: sent ? "Thank you — your enquiry has been recorded. We will get back to you shortly." : "placeholder"
								})]
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ jsx(Reveal, {
			delay: 100,
			className: "mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-md border border-border shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ jsx("iframe", {
					title: "Ganesh Trading Company location map",
					src: mapEmbedUrl,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "h-[380px] w-full border-0 sm:h-[460px]"
				}), /* @__PURE__ */ jsxs("div", {
					className: "pointer-events-auto absolute bottom-4 left-4 max-w-xs rounded-md bg-background/95 p-5 shadow-[var(--shadow-card-hover)] backdrop-blur",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-display text-base font-bold text-ink",
							children: siteConfig.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: siteConfig.tagline
						}),
						/* @__PURE__ */ jsx("a", {
							href: mapDirectionsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-3 inline-flex items-center gap-2 text-sm font-bold text-gold-dark hover:underline",
							children: "Get Directions"
						})
					]
				})]
			})
		})]
	});
}
var all_equipment_png_asset_default = {
	version: 1,
	asset_id: "d2465d25-70d4-44fb-bbed-25dcb0c698ca",
	project_id: "ffb8759c-aea0-430d-ae18-4653f5397420",
	url: "https://gold-steel-roots.lovable.app/__l5e/assets-v1/d2465d25-70d4-44fb-bbed-25dcb0c698ca/all-equipment.png",
	r2_key: "a/v1/ffb8759c-aea0-430d-ae18-4653f5397420/d2465d25-70d4-44fb-bbed-25dcb0c698ca/all-equipment.png",
	original_filename: "all-equipment.png",
	size: 2786547,
	content_type: "image/png",
	created_at: "2026-08-26T04:59:49Z"
};
//#endregion
//#region src/components/site/FinalCta.tsx
function FinalCta() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-ink py-24 lg:py-28",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: all_equipment_png_asset_default.url,
				alt: "Road safety cones, PPE, fire extinguishers, welding machines, power tools and industrial equipment",
				width: 1920,
				height: 780,
				loading: "lazy",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[oklch(0.09_0_0/0.82)]" }),
			/* @__PURE__ */ jsxs(Reveal, {
				className: "relative mx-auto max-w-3xl px-4 text-center sm:px-6",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "heading-lg text-white",
						children: "Need Expert Advice or Bulk Quote"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-rule mx-auto mt-5 block" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base leading-relaxed text-white/80 sm:text-lg",
						children: "Talk to Ganesh Trading Company for quality products, trusted brands and dependable industrial solutions."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-9 flex flex-wrap justify-center gap-3",
						children: /* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "btn-base btn-gold",
							children: "Get a Quote"
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-ink text-white/70 border-t-2 border-gold",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("img", {
					src: ganesh_logo_jpg_asset_default.url,
					alt: "Ganesh Trading Company logo",
					width: 200,
					height: 200,
					loading: "lazy",
					className: "h-20 w-auto rounded-sm bg-white p-1"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-5 text-sm leading-relaxed",
					children: "Trusted distributor and stockist with 71+ years of industrial experience."
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-sm font-bold tracking-widest text-gold uppercase",
					children: "Quick Links"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: "transition-colors hover:text-gold",
						children: link.label
					}) }, link.href))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-sm font-bold tracking-widest text-gold uppercase",
					children: "Product Categories"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: categories.map((cat) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "#products",
						className: "transition-colors hover:text-gold",
						children: cat.name
					}) }, cat.name))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-sm font-bold tracking-widest text-gold uppercase",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: siteConfig.phoneHref,
							className: "transition-colors hover:text-gold",
							children: siteConfig.phone
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: `mailto:${siteConfig.email}`,
							className: "transition-colors hover:text-gold",
							children: siteConfig.email
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: mapDirectionsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "transition-colors hover:text-gold",
							children: siteConfig.address
						}) }),
						/* @__PURE__ */ jsx("li", { children: siteConfig.hours })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© 2026 ",
					siteConfig.name,
					". All Rights Reserved."
				] }), /* @__PURE__ */ jsxs("p", {
					className: "text-white/50",
					children: ["Designed & Developed by ", /* @__PURE__ */ jsx("span", {
						className: "text-gold font-semibold",
						children: "Ayrondigitalsolutions"
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/FloatingContact.tsx
var WhatsAppIcon = (props) => /* @__PURE__ */ jsx("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	...props,
	children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.198.058-.371-.024-.52-.082-.148-.652-1.57-.893-2.148-.235-.564-.474-.487-.652-.496l-.556-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" })
});
function FloatingContact() {
	const [showScroll, setShowScroll] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setShowScroll(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed right-4 bottom-4 z-40 flex flex-col gap-3",
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: scrollToTop,
				"aria-label": "Scroll to top",
				className: cn("grid size-13 place-items-center rounded-full bg-ink text-gold shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:bg-gold hover:text-ink", showScroll ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-75 pointer-events-none"),
				children: /* @__PURE__ */ jsx(ArrowUp, {
					className: "size-6",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: `https://wa.me/${siteConfig.whatsapp}`,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat with us on WhatsApp",
				className: "grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-card-hover)] transition-transform hover:-translate-y-1 hover:bg-[#20ba5a]",
				children: /* @__PURE__ */ jsx(WhatsAppIcon, {
					className: "size-7",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: siteConfig.phoneHref,
				"aria-label": `Call ${siteConfig.phone}`,
				className: "grid size-13 place-items-center rounded-full bg-gold text-ink shadow-[var(--shadow-card-hover)] transition-transform hover:-translate-y-1",
				children: /* @__PURE__ */ jsx(Phone, {
					className: "size-6",
					"aria-hidden": "true"
				})
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen overflow-x-hidden scroll-smooth bg-background font-sans",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Stats, {}),
				/* @__PURE__ */ jsx(Partners, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Founder, {}),
				/* @__PURE__ */ jsx(Products, {}),
				/* @__PURE__ */ jsx(Industries, {}),
				/* @__PURE__ */ jsx(WhyUs, {}),
				/* @__PURE__ */ jsx(Testimonials, {}),
				/* @__PURE__ */ jsx(LegacyBanner, {}),
				/* @__PURE__ */ jsx(Contact, {}),
				/* @__PURE__ */ jsx(FinalCta, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingContact, {})
		]
	});
}
//#endregion
export { Index as component };
