import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as CalendarClock } from "../_libs/lucide-react.mjs";
import { a as PageHeader, c as daysUntil, l as fmt, n as ErrorState, r as ListSkeleton, t as EmptyState } from "./common-C5CtexSu.mjs";
import { t as fetchExpiry } from "./api-CtvYCaK3.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/expiry-D--mEuPR.js
var import_jsx_runtime = require_jsx_runtime();
function status(days) {
	if (days <= 30) return {
		label: "Expiring soon",
		cls: "bg-warning-soft text-warning"
	};
	if (days <= 90) return {
		label: "Upcoming",
		cls: "bg-secondary text-primary"
	};
	return {
		label: "Later",
		cls: "bg-muted text-muted-foreground"
	};
}
function Expiry() {
	const q = useQuery({
		queryKey: ["expiry"],
		queryFn: fetchExpiry
	});
	const data = q.data ?? [];
	const total = data.reduce((a, r) => a + r.points, 0);
	const groups = data.reduce((acc, r) => {
		const k = new Date(r.expiresAt).toLocaleDateString("en-GB", {
			month: "long",
			year: "numeric"
		});
		(acc[k] ||= []).push(r);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 animate-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Points Expiry",
				back: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface flex items-center gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-2xl bg-warning-soft text-warning",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Total points expiring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-extrabold",
						children: q.isPending ? "—" : fmt(total)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Redeem rewards before they expire."
					})
				] })]
			}),
			q.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-surface px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListSkeleton, { rows: 4 })
			}) : q.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, { onRetry: () => q.refetch() }) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No expiring points",
				text: "None of your points are scheduled to expire."
			}) : Object.entries(groups).map(([month, rows]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-sm font-bold text-muted-foreground",
				children: month
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: rows.map((r) => {
					const d = daysUntil(r.expiresAt);
					const s = status(d);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface flex items-center gap-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex size-12 flex-col items-center justify-center rounded-xl bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase text-primary",
									children: new Date(r.expiresAt).toLocaleDateString("en-GB", { month: "short" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-extrabold leading-none",
									children: new Date(r.expiresAt).getDate()
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold",
									children: [fmt(r.points), " pts"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: d > 0 ? `${d} days remaining` : "Expired"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", s.cls),
								children: s.label
							})
						]
					}, r.id);
				})
			})] }, month))
		]
	});
}
//#endregion
export { Expiry as component };
