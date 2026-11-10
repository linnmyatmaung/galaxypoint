import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-iqs1vWgL.js
var import_jsx_runtime = require_jsx_runtime();
var galaxy_logo_default = "/assets/galaxy-logo-DosZE-Nl.png";
function Logo({ compact, light, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: galaxy_logo_default,
			alt: "Galaxy Reward",
			width: 36,
			height: 36,
			className: "size-9 rounded-xl"
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("text-base font-extrabold tracking-tight", light ? "text-primary-foreground" : "text-foreground"),
			children: ["Galaxy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: light ? "" : "text-primary",
				children: "Reward"
			})]
		})]
	});
}
//#endregion
export { Logo as t };
