import { i as __toESM } from "../_runtime.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHeader } from "./common-C5CtexSu.mjs";
import { t as Input } from "./input-BINyyl5h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile.reset-password-AhVsEdqo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPassword() {
	const [error, setError] = (0, import_react.useState)("");
	const [complete, setComplete] = (0, import_react.useState)(false);
	function submit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		if (form.get("password") !== form.get("confirmPassword")) {
			setError("Passwords do not match.");
			return;
		}
		setError("");
		setComplete(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 animate-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: "Reset password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "card-surface space-y-4 p-5",
			children: [complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Your demo password update is complete."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/profile",
					children: "Back to profile"
				})
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5 text-sm font-medium",
						children: ["New password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "password",
							type: "password",
							autoComplete: "new-password",
							minLength: 8,
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5 text-sm font-medium",
						children: ["Confirm new password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "confirmPassword",
							type: "password",
							autoComplete: "new-password",
							minLength: 8,
							required: true
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						role: "alert",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Password changes are not saved by this demo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						type: "submit",
						children: "Update password"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/profile",
					className: "font-medium text-primary hover:underline",
					children: "Back to profile"
				})
			})]
		})]
	});
}
//#endregion
export { ResetPassword as component };
