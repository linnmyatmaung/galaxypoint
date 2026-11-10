import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { C as useRouter, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowDownLeft, M as ArrowUpRight, S as CircleAlert, T as ChevronLeft, h as Inbox } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/common-C5CtexSu.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var pointsToMmk = (points) => points * 1;
var fmt = (n) => n.toLocaleString("en-US");
var daysUntil = (iso, now = /* @__PURE__ */ new Date()) => Math.ceil((new Date(iso).getTime() - now.getTime()) / 864e5);
var profileFields = [
	"fullName",
	"phone",
	"email",
	"dateOfBirth",
	"gender",
	"address",
	"avatarUrl"
];
function profileCompletion(m) {
	const missing = profileFields.filter((f) => !m[f]);
	return {
		percent: Math.round((profileFields.length - missing.length) / profileFields.length * 100),
		missing
	};
}
function PageHeader({ title, back, action }) {
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-5 flex items-center gap-2",
		children: [
			back && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": "Back",
				onClick: () => router.history.back(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "flex-1 text-xl font-bold tracking-tight",
				children: title
			}),
			action
		]
	});
}
function MemberAvatar({ member, size = "md" }) {
	const initials = member.fullName.split(" ").map((p) => p[0]).slice(0, 2).join("");
	const s = {
		sm: "size-10 text-sm",
		md: "size-14 text-lg",
		lg: "size-24 text-3xl"
	}[size];
	return member.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: member.avatarUrl,
		alt: member.fullName,
		className: cn(s, "rounded-full object-cover")
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(s, "flex items-center justify-center rounded-full bg-secondary font-bold text-primary"),
		children: initials
	});
}
function SectionTitle({ title, to, label = "View all" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-base font-bold",
			children: title
		}), to && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "text-sm font-semibold text-primary",
			children: label
		})]
	});
}
function TxRow({ tx, detailed }) {
	const earned = tx.type === "earned";
	const d = new Date(tx.date);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex size-10 shrink-0 items-center justify-center rounded-full", earned ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"),
				children: earned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-semibold",
						children: tx.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: [
							tx.branch,
							" · ",
							d.toLocaleDateString("en-GB", {
								day: "numeric",
								month: "short"
							}),
							detailed && ` · ${d.toLocaleTimeString("en-US", {
								hour: "numeric",
								minute: "2-digit"
							})}`
						]
					}),
					detailed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: tx.reference
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-sm font-bold", earned ? "text-success" : "text-destructive"),
					children: [earned ? "+" : "−", fmt(tx.points)]
				}), detailed && tx.balanceAfter !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-muted-foreground",
					children: ["Bal ", fmt(tx.balanceAfter)]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] capitalize text-muted-foreground",
					children: tx.type
				})]
			})
		]
	});
}
function ListSkeleton({ rows = 5 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4 py-2",
		children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-10 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-2/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-1/3" })]
			})]
		}, i))
	});
}
function EmptyState({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex size-14 items-center justify-center rounded-full bg-secondary text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-xs text-sm text-muted-foreground",
				children: text
			})
		]
	});
}
function ErrorState({ onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: "Couldn't load data"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Please check your connection and try again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "soft",
				className: "mt-4",
				onClick: onRetry,
				children: "Try again"
			})
		]
	});
}
//#endregion
export { PageHeader as a, daysUntil as c, profileCompletion as d, MemberAvatar as i, fmt as l, ErrorState as n, SectionTitle as o, ListSkeleton as r, TxRow as s, EmptyState as t, pointsToMmk as u };
