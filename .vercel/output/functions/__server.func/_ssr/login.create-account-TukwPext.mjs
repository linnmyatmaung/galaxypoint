import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as buttonVariants, t as Button } from "./button-BYpexxxp.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Check, E as ChevronDown, N as ArrowRight, O as Camera, P as ArrowLeft, T as ChevronLeft, d as Mail, k as CalendarDays, l as Phone, r as UserRound, u as Minus, w as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as useMemberStore } from "./member-DgJPEBtm.mjs";
import { i as PopoverTrigger$1, n as PopoverContent$1, r as PopoverPortal, t as Popover$1 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { t as useAuthStore } from "./auth-B8uTi1H2.mjs";
import { t as AuthFrame } from "./AuthFrame-ByFi3daa.mjs";
import { t as Input } from "./input-BINyyl5h.mjs";
import { l as format } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
import { n as Nt, t as $t } from "../_libs/input-otp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login.create-account-TukwPext.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers["focused"]) ref.current?.focus();
	}, [modifiers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers["selected"] && !modifiers["range_start"] && !modifiers["range_end"] && !modifiers["range_middle"],
		"data-range-start": modifiers["range_start"],
		"data-range-end": modifiers["range_end"],
		"data-range-middle": modifiers["range_middle"],
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var InputOTP = import_react.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($t, {
	ref,
	containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
	className: cn("disabled:cursor-not-allowed", className),
	...props
}));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center", className),
	...props
}));
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = import_react.forwardRef(({ index, className, ...props }, ref) => {
	const { char, hasFakeCaret, isActive } = import_react.useContext(Nt).slots[index] ?? {
		char: null,
		hasFakeCaret: false,
		isActive: false
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "separator",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
}));
InputOTPSeparator.displayName = "InputOTPSeparator";
var Popover = Popover$1;
var PopoverTrigger = PopoverTrigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = PopoverContent$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var steps = [
	"Contact",
	"Verify",
	"Password",
	"Profile"
];
function CreateAccount() {
	const navigate = useNavigate();
	const signIn = useAuthStore((s) => s.signIn);
	const updateMember = useMemberStore((s) => s.updateMember);
	const [step, setStep] = (0, import_react.useState)(1);
	const [contactMethod, setContactMethod] = (0, import_react.useState)("phone");
	const [contact, setContact] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("000000");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [dateOfBirth, setDateOfBirth] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [avatarUrl, setAvatarUrl] = (0, import_react.useState)(null);
	const [dobOpen, setDobOpen] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function submit(event) {
		event.preventDefault();
		setError("");
		if (step === 2 && code !== "000000") {
			setError("That verification code is not correct.");
			return;
		}
		if (step === 3 && password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}
		if (step < 4) {
			setStep((current) => current + 1);
			return;
		}
		updateMember({
			fullName: fullName.trim(),
			email: contactMethod === "email" ? contact : "",
			phone: contactMethod === "phone" ? contact : "",
			dateOfBirth,
			gender,
			address: address.trim(),
			avatarUrl
		});
		signIn();
		navigate({ to: "/" });
	}
	function chooseAvatar(event) {
		const file = event.currentTarget.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			setError("Choose an image file.");
			return;
		}
		if (file.size > 4194304) {
			setError("Choose an image smaller than 4 MB.");
			return;
		}
		setError("");
		setAvatarUrl(URL.createObjectURL(file));
	}
	[
		"Choose your contact",
		"Verify your contact",
		"Create a password",
		"Personal details"
	][step - 1];
	const description = [
		"Choose where to receive your verification code.",
		`Enter the six-digit code sent to ${contact}.`,
		"Create a password with at least 8 characters.",
		"Add a few details to complete your member profile."
	][step - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthFrame, {
		title: "Create your account",
		description,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				"aria-label": "Account creation progress",
				className: "mb-6 grid grid-cols-4 gap-1",
				children: steps.map((label, index) => {
					const number = index + 1;
					const complete = number < step;
					const active = number === step;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-current": active ? "step" : void 0,
							"aria-label": `Step ${number}: ${label}`,
							disabled: number >= step,
							onClick: () => {
								setError("");
								setStep(number);
							},
							className: "flex w-full flex-col items-center gap-1.5 disabled:cursor-default",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `flex size-8 items-center justify-center rounded-full text-xs font-bold ${complete || active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
								children: complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `max-w-full truncate text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`,
								children: label
							})]
						})
					}, label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: submit,
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						role: "group",
						"aria-label": "Contact method",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: contactMethod === "phone" ? "default" : "outline",
							"aria-pressed": contactMethod === "phone",
							onClick: () => {
								setContactMethod("phone");
								setContact("");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "Phone"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: contactMethod === "email" ? "default" : "outline",
							"aria-pressed": contactMethod === "email",
							onClick: () => {
								setContactMethod("email");
								setContact("");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), "Email"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5 text-sm font-medium",
						children: [contactMethod === "phone" ? "Phone number" : "Email address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoComplete: contactMethod === "phone" ? "tel" : "email",
							type: contactMethod === "phone" ? "tel" : "email",
							value: contact,
							onChange: (event) => setContact(event.target.value),
							placeholder: contactMethod === "phone" ? "+95 9 123 456 789" : "you@example.com",
							required: true
						})]
					})] }),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 rounded-lg bg-secondary/60 px-3 py-2 text-sm",
						children: [contactMethod === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-medium",
							children: contact
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm font-medium",
								children: "Enter verification code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
								"aria-label": "Six-digit verification code",
								maxLength: 6,
								value: code,
								onChange: setCode,
								containerClassName: "w-full justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPGroup, {
									className: "gap-1",
									children: Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
										index,
										className: "mx-0.5 size-10 rounded-md border text-base font-semibold sm:size-11"
									}, index))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs text-muted-foreground",
								children: "Demo code: 000000"
							})
						]
					})] }),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5 text-sm font-medium",
						children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoComplete: "new-password",
							type: "password",
							minLength: 8,
							value: password,
							onChange: (event) => setPassword(event.target.value),
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5 text-sm font-medium",
						children: ["Confirm password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoComplete: "new-password",
							type: "password",
							minLength: 8,
							value: confirmPassword,
							onChange: (event) => setConfirmPassword(event.target.value),
							required: true
						})]
					})] }),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center pb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								title: "Upload profile image",
								className: "group relative block size-24 cursor-pointer rounded-full focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
								children: [
									avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: avatarUrl,
										alt: "Profile preview",
										className: "size-24 rounded-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-24 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-secondary/70",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-10" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										"aria-label": "Upload profile image",
										className: "sr-only",
										onChange: chooseAvatar
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-1.5 text-sm font-medium",
							children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoComplete: "name",
								value: fullName,
								onChange: (event) => setFullName(event.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-1.5 text-sm font-medium",
							children: ["Date of birth", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
								open: dobOpen,
								onOpenChange: setDobOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "outline",
										"aria-label": "Select date of birth",
										"aria-required": "true",
										className: `h-12 w-full justify-start gap-3 text-left font-normal ${dateOfBirth ? "" : "text-muted-foreground"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1",
												children: dateOfBirth ? format(/* @__PURE__ */ new Date(`${dateOfBirth}T00:00:00`), "MMMM d, yyyy") : "Choose your date of birth"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
									align: "start",
									className: "w-auto p-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
										mode: "single",
										captionLayout: "dropdown",
										selected: dateOfBirth ? /* @__PURE__ */ new Date(`${dateOfBirth}T00:00:00`) : void 0,
										disabled: (date) => date > /* @__PURE__ */ new Date(),
										onSelect: (date) => {
											if (date) {
												setDateOfBirth(format(date, "yyyy-MM-dd"));
												setDobOpen(false);
											}
										}
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-1.5 text-sm font-medium",
							children: ["Gender", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: gender,
								onChange: (event) => setGender(event.target.value),
								className: "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Prefer not to say"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "female",
										children: "Female"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "male",
										children: "Male"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "other",
										children: "Other"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-1.5 text-sm font-medium",
							children: [
								"Address ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: "(optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: address,
									onChange: (event) => setAddress(event.target.value),
									rows: 2
								})
							]
						})
					] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						role: "alert",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [step > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "flex-1",
							onClick: () => {
								setError("");
								setStep((current) => current - 1);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), "Back"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "flex-1",
							type: "submit",
							children: [step === 1 ? "Send verification code" : step === 2 ? "Verify code" : step === 3 ? "Continue" : "Create account", step < 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-center text-sm text-muted-foreground",
				children: ["Already a member? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "font-medium text-primary hover:underline",
					children: "Sign in"
				})]
			})
		]
	});
}
//#endregion
export { CreateAccount as component };
