import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-BYpexxxp.mjs";
import { S as useNavigate, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAuthStore } from "./auth-B8uTi1H2.mjs";
import { t as AuthFrame } from "./AuthFrame-ByFi3daa.mjs";
import { t as Input } from "./input-BINyyl5h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Cvz-HbC-.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") === "/login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
function LoginForm() {
	const navigate = useNavigate();
	const signIn = useAuthStore((s) => s.signIn);
	function submit(event) {
		event.preventDefault();
		signIn();
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthFrame, {
		title: "Welcome back",
		description: "Sign in to your Galaxy Reward account.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: submit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5 text-sm font-medium",
					children: ["Email or phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "identifier",
						autoComplete: "username",
						placeholder: "you@example.com",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5 text-sm font-medium",
					children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "password",
						type: "password",
						autoComplete: "current-password",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "-mt-2 text-xs text-muted-foreground",
					children: "Demo mode: any password will sign in."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					type: "submit",
					children: "Sign in"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex justify-between text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login/forgot-password",
				className: "font-medium text-primary hover:underline",
				children: "Forgot password?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login/create-account",
				className: "font-medium text-primary hover:underline",
				children: "Create account"
			})]
		})]
	});
}
//#endregion
export { Login as component };
