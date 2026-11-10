import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Logo } from "./Logo-iqs1vWgL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CalendarClock, T as ChevronLeft, _ as History, c as QrCode, i as UserRoundPen, j as Bell, v as Gift, w as ChevronRight } from "../_libs/lucide-react.mjs";
import { d as profileCompletion, i as MemberAvatar, l as fmt, o as SectionTitle, s as TxRow, u as pointsToMmk } from "./common-C5CtexSu.mjs";
import { i as useMemberStore, n as mockPromotions, t as mockExpiry } from "./member-DgJPEBtm.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as ProgressIndicator, t as Progress$1 } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-MlKhurJs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PointsCard() {
	const { member, points } = useMemberStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl bg-gradient-card p-5 text-primary-foreground shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border-[28px] border-primary-foreground/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 right-10 size-40 rounded-full bg-primary-foreground/5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold",
					children: member.membershipType
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-5 text-sm text-primary-foreground/75",
				children: "Available points"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative text-4xl font-extrabold tracking-tight",
				children: fmt(points)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "relative text-sm text-primary-foreground/80",
				children: [
					"≈ ",
					fmt(pointsToMmk(points)),
					" MMK value"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-5 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wider text-primary-foreground/60",
					children: "Member ID"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm font-semibold tracking-wide",
					children: member.id
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "onCard",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {}),
							" Member Card ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						]
					})
				})]
			})
		]
	});
}
function PromoCarousel() {
	const ref = (0, import_react.useRef)(null);
	const [idx, setIdx] = (0, import_react.useState)(0);
	const promos = mockPromotions;
	const go = (i) => {
		const el = ref.current;
		if (!el) return;
		const n = (i + promos.length) % promos.length;
		el.scrollTo({
			left: n * el.clientWidth,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => go(idx + 1), 5e3);
		return () => clearInterval(t);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				onScroll: (e) => setIdx(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth)),
				className: "no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl",
				children: promos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative aspect-[16/8] w-full shrink-0 snap-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.title,
							className: "absolute inset-0 size-full object-cover",
							loading: i ? "lazy" : void 0,
							width: 1200,
							height: 640
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-4 text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-1 text-xs text-primary-foreground/85",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[11px] text-primary-foreground/70",
									children: ["Until ", new Date(p.expiresAt).toLocaleDateString("en-GB", {
										day: "numeric",
										month: "short",
										year: "numeric"
									})]
								})
							]
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Previous",
				onClick: () => go(idx - 1),
				className: "absolute left-2 top-1/3 flex size-8 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Next",
				onClick: () => go(idx + 1),
				className: "absolute right-2 top-1/3 flex size-8 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex justify-center gap-1.5",
				children: promos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": `Go to ${p.title}`,
					onClick: () => go(i),
					className: cn("h-1.5 rounded-full transition-all", i === idx ? "w-5 bg-primary" : "w-1.5 bg-border")
				}, p.id))
			})
		]
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Progress$1.displayName;
var quick = [
	{
		to: "/rewards",
		label: "Rewards",
		icon: Gift
	},
	{
		to: "/card",
		label: "Member Card",
		icon: QrCode
	},
	{
		to: "/history",
		label: "History",
		icon: History
	},
	{
		to: "/expiry",
		label: "Expiry",
		icon: CalendarClock
	}
];
function Home() {
	const { member, transactions } = useMemberStore();
	const next = mockExpiry[0];
	const { percent } = profileCompletion(member);
	const first = member.fullName.split(" ")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 animate-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						compact: true,
						className: "lg:hidden"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Welcome back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-bold",
							children: ["Hello, ", first]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Notifications",
						className: "relative",
						onClick: () => toast("No new notifications"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 size-2 rounded-full bg-destructive" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/profile",
						"aria-label": "Profile",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberAvatar, {
							member,
							size: "sm"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointsCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2",
				children: quick.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					className: "flex flex-col items-center gap-2 rounded-2xl p-2 text-center transition-colors hover:bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-12 items-center justify-center rounded-2xl bg-card text-primary shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium",
						children: label
					})]
				}, to))
			}),
			next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/expiry",
				className: "flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning-soft p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-5 shrink-0 text-warning" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [fmt(next.points), " points expiring soon"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["On ", new Date(next.expiresAt).toLocaleDateString("en-GB", {
								day: "numeric",
								month: "long",
								year: "numeric"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-muted-foreground" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Promotions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoCarousel, {})] }),
			percent < 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface flex items-center gap-4 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 items-center justify-center rounded-full bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPen, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-semibold",
							children: [
								"Your profile is ",
								percent,
								"% complete"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: percent,
							className: "mt-2 h-1.5"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/profile",
							children: "Complete"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card-surface px-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					title: "Recent activity",
					to: "/history"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: transactions.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxRow, { tx: t }, t.id))
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
