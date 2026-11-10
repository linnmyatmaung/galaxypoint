import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { S as useNavigate, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as LogOut, p as KeyRound } from "../_libs/lucide-react.mjs";
import { a as PageHeader, i as MemberAvatar, l as fmt } from "./common-C5CtexSu.mjs";
import { i as useMemberStore } from "./member-DgJPEBtm.mjs";
import { t as useAuthStore } from "./auth-B8uTi1H2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-D6dptrPj.js
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	return useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") === "/profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function ProfilePage() {
	const navigate = useNavigate();
	const signOut = useAuthStore((s) => s.signOut);
	const { member, points } = useMemberStore();
	const rows = [
		["Phone", member.phone],
		["Email", member.email],
		["Date of birth", member.dateOfBirth],
		["Gender", member.gender || "—"],
		["Address", member.address || "Not provided"],
		["Member ID", member.id]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 animate-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: "Profile" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface flex items-center gap-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberAvatar, { member }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-bold",
					children: member.fullName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						member.membershipType,
						" · ",
						fmt(points),
						" pts"
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-surface divide-y divide-border px-4",
				children: rows.map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right font-medium capitalize",
						children: v
					})]
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card-surface space-y-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Account security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full justify-start",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/profile/reset-password",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {}), "Reset password"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "w-full justify-start text-destructive hover:text-destructive",
						onClick: () => {
							signOut();
							navigate({ to: "/login" });
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), "Sign out"]
					})
				]
			})
		]
	});
}
//#endregion
export { Profile as component };
