import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Logo } from "./Logo-iqs1vWgL.mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as Navigate, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as History, c as QrCode, g as House, n as User, v as Gift } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as useAuthStore } from "./auth-B8uTi1H2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cm0_xA5v.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-I7EtWP3q.css";
var nav = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/rewards",
		label: "Rewards",
		icon: Gift
	},
	{
		to: "/card",
		label: "Member Card",
		icon: QrCode
	},
	{
		to: "/history",
		label: "History",
		icon: History
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	}
];
function isActive(path, to) {
	return to === "/" ? path === "/" || path === "/expiry" : path.startsWith(to);
}
function AppShell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
	if (path.startsWith("/login")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-border bg-sidebar p-5 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-10 flex flex-col gap-1",
						children: nav.map(({ to, label, icon: Icon }) => {
							const active = isActive(path, to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to,
								className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", active ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), label]
							}, to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto text-xs text-muted-foreground",
						children: "200 MMK = 1 pt · 1 pt = 1 MMK"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "lg:pl-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-xl px-4 pb-28 pt-4 lg:pb-12 lg:pt-8",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-xl grid-cols-5",
					children: nav.map(({ to, label, icon: Icon }) => {
						const active = isActive(path, to);
						const isCard = to === "/card";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							className: "flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("flex items-center justify-center rounded-full transition-all", isCard ? "-mt-6 size-12 bg-primary text-primary-foreground shadow-card" : "size-7", !isCard && (active ? "text-primary" : "text-muted-foreground")),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: isCard ? "size-6" : "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active ? "text-primary" : "text-muted-foreground",
								children: label
							})]
						}, to);
					})
				})
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Galaxy Reward" },
			{
				name: "description",
				content: "Your Galaxy Point loyalty wallet."
			},
			{
				property: "og:title",
				content: "Galaxy Reward"
			},
			{
				property: "og:description",
				content: "Your Galaxy Point loyalty wallet."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$9 = () => import("./routes-MlKhurJs.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Home — Galaxy Reward" },
		{
			name: "description",
			content: "Your Galaxy points balance, promotions and recent activity."
		},
		{
			property: "og:title",
			content: "Home — Galaxy Reward"
		},
		{
			property: "og:description",
			content: "Your Galaxy points balance, promotions and recent activity."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./card-CwB1U8ql.mjs");
var Route$8 = createFileRoute("/card")({
	head: () => ({ meta: [
		{ title: "Member Card — Galaxy Reward" },
		{
			name: "description",
			content: "Show your Galaxy member QR code at the cashier to earn or redeem points."
		},
		{
			property: "og:title",
			content: "Member Card — Galaxy Reward"
		},
		{
			property: "og:description",
			content: "Show your Galaxy member QR code at the cashier."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./expiry-D--mEuPR.mjs");
var Route$7 = createFileRoute("/expiry")({
	head: () => ({ meta: [
		{ title: "Points Expiry — Galaxy Reward" },
		{
			name: "description",
			content: "See which Galaxy points expire and when."
		},
		{
			property: "og:title",
			content: "Points Expiry — Galaxy Reward"
		},
		{
			property: "og:description",
			content: "See which Galaxy points expire and when."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./history-D8GCDlck.mjs");
var Route$6 = createFileRoute("/history")({
	head: () => ({ meta: [
		{ title: "Point History — Galaxy Reward" },
		{
			name: "description",
			content: "Every point you have earned and redeemed."
		},
		{
			property: "og:title",
			content: "Point History — Galaxy Reward"
		},
		{
			property: "og:description",
			content: "Every point you have earned and redeemed."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./login-Cvz-HbC-.mjs");
var Route$5 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign in — Galaxy Reward" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./profile-D6dptrPj.mjs");
var Route$4 = createFileRoute("/profile")({
	head: () => ({ meta: [
		{ title: "Profile — Galaxy Reward" },
		{
			name: "description",
			content: "Your Galaxy Reward member profile."
		},
		{
			property: "og:title",
			content: "Profile — Galaxy Reward"
		},
		{
			property: "og:description",
			content: "Your Galaxy Reward member profile."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./rewards-DSKrwBgz.mjs");
var Route$3 = createFileRoute("/rewards")({
	head: () => ({ meta: [
		{ title: "Rewards — Galaxy Reward" },
		{
			name: "description",
			content: "Discover and redeem rewards with your Galaxy points."
		},
		{
			property: "og:title",
			content: "Rewards — Galaxy Reward"
		},
		{
			property: "og:description",
			content: "Discover and redeem rewards with your Galaxy points."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./login.create-account-TukwPext.mjs");
var Route$2 = createFileRoute("/login/create-account")({
	head: () => ({ meta: [{ title: "Create account — Galaxy Reward" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./login.forgot-password-jSsj3WqF.mjs");
var Route$1 = createFileRoute("/login/forgot-password")({
	head: () => ({ meta: [{ title: "Reset password — Galaxy Reward" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./profile.reset-password-AhVsEdqo.mjs");
var Route = createFileRoute("/profile/reset-password")({
	head: () => ({ meta: [{ title: "Reset password — Galaxy Reward" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var CardRoute = Route$8.update({
	id: "/card",
	path: "/card",
	getParentRoute: () => Route$10
});
var ExpiryRoute = Route$7.update({
	id: "/expiry",
	path: "/expiry",
	getParentRoute: () => Route$10
});
var HistoryRoute = Route$6.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => Route$10
});
var LoginRoute = Route$5.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$10
});
var ProfileRoute = Route$4.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$10
});
var RewardsRoute = Route$3.update({
	id: "/rewards",
	path: "/rewards",
	getParentRoute: () => Route$10
});
var LoginCreateAccountRoute = Route$2.update({
	id: "/create-account",
	path: "/create-account",
	getParentRoute: () => LoginRoute
});
var LoginForgotPasswordRoute = Route$1.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => LoginRoute
});
var ProfileResetPasswordRoute = Route.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => ProfileRoute
});
var LoginRouteChildren = {
	LoginCreateAccountRoute,
	LoginForgotPasswordRoute
};
var LoginRouteWithChildren = LoginRoute._addFileChildren(LoginRouteChildren);
var ProfileRouteChildren = { ProfileResetPasswordRoute };
var rootRouteChildren = {
	IndexRoute,
	CardRoute,
	ExpiryRoute,
	HistoryRoute,
	LoginRoute: LoginRouteWithChildren,
	ProfileRoute: ProfileRoute._addFileChildren(ProfileRouteChildren),
	RewardsRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
