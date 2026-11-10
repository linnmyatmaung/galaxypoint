import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-B8uTi1H2.js
var useAuthStore = create((set) => ({
	isAuthenticated: false,
	signIn: () => set({ isAuthenticated: true }),
	signOut: () => set({ isAuthenticated: false })
}));
//#endregion
export { useAuthStore as t };
