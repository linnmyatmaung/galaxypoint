import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-BINyyl5h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-lg border border-input bg-background px-3.5 py-2 text-base shadow-sm transition-all placeholder:text-muted-foreground/75 hover:border-primary/35 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/60 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
export { Input as t };
