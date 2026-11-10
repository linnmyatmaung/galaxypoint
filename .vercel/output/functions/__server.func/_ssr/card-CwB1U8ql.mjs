import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Logo } from "./Logo-iqs1vWgL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { a as Sun, o as ShieldAlert, s as RefreshCw } from "../_libs/lucide-react.mjs";
import { a as PageHeader, l as fmt } from "./common-C5CtexSu.mjs";
import { i as useMemberStore } from "./member-DgJPEBtm.mjs";
import { r as generateDemoQrToken } from "./api-CtvYCaK3.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-CwB1U8ql.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QR_TTL = 60;
function MemberCard() {
	const { member, points } = useMemberStore();
	const [token, setToken] = (0, import_react.useState)(null);
	const [left, setLeft] = (0, import_react.useState)(QR_TTL);
	const regenerate = (0, import_react.useCallback)(() => {
		setToken(generateDemoQrToken(member.id));
		setLeft(QR_TTL);
	}, [member.id]);
	(0, import_react.useEffect)(() => regenerate(), [regenerate]);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => {
			setLeft((l) => {
				if (l <= 1) {
					setToken(generateDemoQrToken(member.id));
					return QR_TTL;
				}
				return l - 1;
			});
		}, 1e3);
		return () => clearInterval(t);
	}, [member.id]);
	const mm = String(Math.floor(left / 60)).padStart(2, "0");
	const ss = String(left % 60).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: "Member Card" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-gradient-card p-5 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-12 -top-12 size-40 rounded-full border-[24px] border-primary-foreground/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold",
								children: member.membershipType
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-6 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold",
								children: member.fullName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm tracking-wider text-primary-foreground/80",
								children: member.id
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-wider text-primary-foreground/60",
									children: "Points"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-extrabold",
									children: fmt(points)
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center px-6 pb-6 pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: token && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRCodeSVG, {
								value: token,
								size: 232,
								level: "M",
								marginSize: 1,
								"aria-label": "Member QR code"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex size-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })]
									}),
									"Refreshes in ",
									mm,
									":",
									ss
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "soft",
								size: "icon",
								"aria-label": "Regenerate QR",
								onClick: () => {
									regenerate();
									toast.success("New QR code generated");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-center text-sm text-muted-foreground",
							children: "Show this QR code at the cashier to earn or redeem points."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-3.5" }), " Turn up screen brightness for faster scanning"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-3 rounded-2xl border border-warning/30 bg-warning-soft p-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 shrink-0 text-warning" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: "Demo QR."
				}), " This code is generated in the app for preview only and is not valid at the cashier. Real member QR codes will be issued and verified by Galaxy Reward's servers."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface mt-4 grid grid-cols-2 gap-4 p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info$1, {
						label: "Member since",
						value: new Date(member.joinedAt).toLocaleDateString("en-GB", {
							month: "short",
							year: "numeric"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info$1, {
						label: "Phone",
						value: member.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info$1, {
						label: "Earn rate",
						value: "200 MMK = 1 pt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info$1, {
						label: "Point value",
						value: "1 pt = 1 MMK"
					})
				]
			})
		]
	});
}
function Info$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-semibold",
		children: value
	})] });
}
//#endregion
export { MemberCard as component };
