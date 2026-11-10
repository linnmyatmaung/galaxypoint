import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { b as CircleX, m as Info, t as X, x as CircleCheck, y as Coins } from "../_libs/lucide-react.mjs";
import { a as PageHeader, l as fmt } from "./common-C5CtexSu.mjs";
import { i as useMemberStore, r as mockRewards } from "./member-DgJPEBtm.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rewards-DSKrwBgz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var cats = [
	"All",
	"Vouchers",
	"Dining",
	"Entertainment",
	"Lifestyle"
];
function Rewards() {
	const { points, redeem } = useMemberStore();
	const [cat, setCat] = (0, import_react.useState)("All");
	const [stock, setStock] = (0, import_react.useState)(() => Object.fromEntries(mockRewards.map((r) => [r.id, r.stock])));
	const [sel, setSel] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)("detail");
	const list = mockRewards.filter((r) => cat === "All" || r.category === cat).map((r) => ({
		...r,
		stock: stock[r.id] ?? 0
	}));
	const featured = list.filter((r) => r.featured);
	const open = (r) => {
		setSel(r);
		setStep("detail");
	};
	const confirm = () => {
		if (!sel) return;
		const res = redeem(sel);
		if (res.ok) {
			setStock((s) => ({
				...s,
				[sel.id]: (s[sel.id] ?? 0) - 1
			}));
			setStep("success");
			toast.success(`Redeemed ${sel.name}`);
		} else if (res.reason === "insufficient") setStep("insufficient");
		else toast.error("This reward is out of stock");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 animate-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: "Rewards" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface flex items-center gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 items-center justify-center rounded-full bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Available points"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-extrabold",
							children: fmt(points)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right text-[11px] leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "200 MMK = 1 pt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1 pt = 1 MMK" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4",
				children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: cn("shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors", c === cat ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"),
					children: c
				}, c))
			}),
			featured.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "Featured"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4",
				children: featured.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => open(r),
					className: "card-surface w-64 shrink-0 overflow-hidden text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: r.image,
						alt: r.name,
						loading: "lazy",
						width: 944,
						height: 704,
						className: "aspect-[16/10] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm font-bold text-primary",
							children: [fmt(r.points), " pts"]
						})]
					})]
				}, r.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-base font-bold",
				children: "All rewards"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: list.map((r) => {
					const out = r.stock <= 0;
					const short = points < r.points;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface flex flex-col overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => open(r),
							className: "text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.image,
								alt: r.name,
								loading: "lazy",
								width: 944,
								height: 704,
								className: cn("aspect-square w-full object-cover", out && "opacity-50 grayscale")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-clamp-2 text-sm font-semibold",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 line-clamp-1 text-xs text-muted-foreground",
									children: r.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm font-bold text-primary",
									children: [fmt(r.points), " pts"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("text-[11px]", out ? "text-destructive" : r.stock < 10 ? "text-warning" : "text-success"),
									children: out ? "Out of stock" : r.stock < 10 ? `Only ${r.stock} left` : "Available"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "mt-3",
									variant: short || out ? "soft" : "default",
									disabled: out,
									onClick: () => open(r),
									children: out ? "Unavailable" : "Redeem"
								})
							]
						})]
					}, r.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!sel,
				onOpenChange: (o) => !o && setSel(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-3xl",
					children: [
						sel && step === "detail" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: sel.image,
								alt: sel.name,
								className: "-mx-6 -mt-6 aspect-[16/9] w-[calc(100%+3rem)] max-w-none rounded-t-3xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
								className: "text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-primary",
										children: sel.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: sel.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: sel.description })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 rounded-xl bg-secondary p-3 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 shrink-0 text-primary" }), sel.terms]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Required"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-lg font-extrabold text-primary",
									children: [fmt(sel.points), " pts"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								disabled: (stock[sel.id] ?? 0) <= 0,
								onClick: () => setStep(points < sel.points ? "insufficient" : "confirm"),
								children: (stock[sel.id] ?? 0) <= 0 ? "Out of stock" : "Redeem reward"
							}) })
						] }),
						sel && step === "confirm" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Confirm redemption" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
									"Redeem ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: sel.name }),
									" for ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [fmt(sel.points), " points"] }),
									"?"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 rounded-xl bg-secondary p-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										l: "Current balance",
										r: fmt(points)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										l: "Reward",
										r: `−${fmt(sel.points)}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										l: "Balance after",
										r: fmt(points - sel.points),
										bold: true
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "flex-row gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "flex-1",
									onClick: () => setStep("detail"),
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "flex-1",
									onClick: confirm,
									children: "Confirm"
								})]
							})
						] }),
						sel && step === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" }),
							tone: "success",
							title: "Reward redeemed!",
							text: `${sel.name} has been added. Show your Member Card at the counter to collect it.`,
							onClose: () => setSel(null)
						}),
						sel && step === "insufficient" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-8" }),
							tone: "danger",
							title: "Not enough points",
							text: `You need ${fmt(sel.points - points)} more points for this reward. Keep shopping to earn 1 point per 200 MMK.`,
							onClose: () => setSel(null)
						})
					]
				})
			})
		]
	});
}
function Row({ l, r, bold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex justify-between", bold && "border-t border-border pt-2 font-bold"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: bold ? "" : "text-muted-foreground",
			children: l
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r })]
	});
}
function Result({ icon, tone, title, text, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mb-4 flex size-16 items-center justify-center rounded-full", tone === "success" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"),
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "mt-2",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6 w-full",
				onClick: onClose,
				children: "Done"
			})
		]
	});
}
//#endregion
export { Rewards as component };
