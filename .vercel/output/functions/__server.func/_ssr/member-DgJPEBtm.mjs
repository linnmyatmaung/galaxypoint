import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/member-DgJPEBtm.js
var promo_mall_default = "/assets/promo-mall-B9to8IQl.jpg";
var promo_dining_default = "/assets/promo-dining-BaU9pdJB.jpg";
var promo_cinema_default = "/assets/promo-cinema-DbtvhYU0.jpg";
var reward_voucher_default = "/assets/reward-voucher-BYsJ_J3Q.jpg";
var reward_coffee_default = "/assets/reward-coffee-Cz8cAPZz.jpg";
var reward_movie_default = "/assets/reward-movie-B6gk2RP_.jpg";
var reward_merch_default = "/assets/reward-merch-DkcDRDgO.jpg";
var mockMember = {
	id: "GX-2048-7731",
	fullName: "Aung Min Khant",
	phone: "09 7812 34567",
	email: "aungminkhant@gmail.com",
	dateOfBirth: "1994-06-18",
	gender: "male",
	address: "",
	avatarUrl: null,
	membershipType: "Galaxy Member",
	verified: true,
	joinedAt: "2023-03-12"
};
var branches = [
	"Junction City",
	"Myanmar Plaza",
	"Times City",
	"Junction Square",
	"Ocean Center"
];
var raw = [
	{
		id: "t1",
		reference: "TXN-884201",
		type: "earned",
		points: 245,
		date: "2026-11-08T15:24:00",
		branch: branches[0],
		description: "Purchase 49,000 MMK"
	},
	{
		id: "t2",
		reference: "TXN-884115",
		type: "redeemed",
		points: 3e3,
		date: "2026-11-05T12:10:00",
		branch: branches[1],
		description: "Coffee voucher"
	},
	{
		id: "t3",
		reference: "TXN-883972",
		type: "earned",
		points: 610,
		date: "2026-11-02T18:42:00",
		branch: branches[2],
		description: "Purchase 122,000 MMK"
	},
	{
		id: "t4",
		reference: "TXN-883410",
		type: "earned",
		points: 92,
		date: "2026-10-27T11:05:00",
		branch: branches[0],
		description: "Purchase 18,400 MMK"
	},
	{
		id: "t5",
		reference: "TXN-882990",
		type: "redeemed",
		points: 5e3,
		date: "2026-10-19T19:30:00",
		branch: branches[3],
		description: "Cinema ticket"
	},
	{
		id: "t6",
		reference: "TXN-882512",
		type: "earned",
		points: 1350,
		date: "2026-10-12T14:15:00",
		branch: branches[4],
		description: "Purchase 270,000 MMK"
	},
	{
		id: "t7",
		reference: "TXN-881877",
		type: "earned",
		points: 430,
		date: "2026-09-30T16:48:00",
		branch: branches[1],
		description: "Purchase 86,000 MMK"
	},
	{
		id: "t8",
		reference: "TXN-881204",
		type: "earned",
		points: 2800,
		date: "2026-09-14T13:20:00",
		branch: branches[2],
		description: "Purchase 560,000 MMK"
	},
	{
		id: "t9",
		reference: "TXN-880533",
		type: "redeemed",
		points: 1e4,
		date: "2026-08-28T17:02:00",
		branch: branches[0],
		description: "Shopping voucher"
	},
	{
		id: "t10",
		reference: "TXN-879961",
		type: "earned",
		points: 8960,
		date: "2026-08-03T10:40:00",
		branch: branches[4],
		description: "Purchase 1,792,000 MMK"
	},
	{
		id: "t11",
		reference: "TXN-879002",
		type: "earned",
		points: 21120,
		date: "2026-06-21T15:55:00",
		branch: branches[3],
		description: "Purchase 4,224,000 MMK"
	}
];
var mockBalance = 18607;
var mockTransactions = (() => {
	let bal = mockBalance;
	return raw.map((t) => {
		const row = {
			...t,
			balanceAfter: bal
		};
		bal = t.type === "earned" ? bal - t.points : bal + t.points;
		return row;
	});
})();
var mockPromotions = [
	{
		id: "p1",
		title: "Year-End Shopping Fest",
		description: "Shop across participating malls and enjoy member-only deals.",
		image: promo_mall_default,
		expiresAt: "2026-12-31"
	},
	{
		id: "p2",
		title: "Café Week",
		description: "Member offers at food court cafés this week.",
		image: promo_dining_default,
		expiresAt: "2026-11-23"
	},
	{
		id: "p3",
		title: "Movie Nights",
		description: "Redeem cinema tickets with your Galaxy points.",
		image: promo_cinema_default,
		expiresAt: "2026-12-15"
	}
];
var mockRewards = [
	{
		id: "r1",
		name: "10,000 MMK Shopping Voucher",
		description: "Use at any participating mall outlet.",
		category: "Vouchers",
		points: 1e4,
		image: reward_voucher_default,
		stock: 42,
		featured: true,
		terms: "Valid for 30 days after redemption. Not exchangeable for cash."
	},
	{
		id: "r2",
		name: "5,000 MMK Shopping Voucher",
		description: "Use at any participating mall outlet.",
		category: "Vouchers",
		points: 5e3,
		image: reward_voucher_default,
		stock: 120,
		terms: "Valid for 30 days after redemption. Not exchangeable for cash."
	},
	{
		id: "r3",
		name: "Iced Latte",
		description: "One regular iced latte at participating cafés.",
		category: "Dining",
		points: 3e3,
		image: reward_coffee_default,
		stock: 85,
		featured: true,
		terms: "Valid for 14 days. One per visit."
	},
	{
		id: "r4",
		name: "Cinema Ticket + Popcorn",
		description: "One standard 2D ticket with a small popcorn.",
		category: "Entertainment",
		points: 5e3,
		image: reward_movie_default,
		stock: 18,
		featured: true,
		terms: "Subject to seat availability. Valid for 30 days."
	},
	{
		id: "r5",
		name: "Galaxy Tote & Earbuds",
		description: "Limited Galaxy Reward canvas tote with wireless earbuds.",
		category: "Lifestyle",
		points: 25e3,
		image: reward_merch_default,
		stock: 6,
		terms: "Collect at the customer service counter."
	},
	{
		id: "r6",
		name: "Galaxy Canvas Tote",
		description: "Sturdy canvas tote for everyday shopping.",
		category: "Lifestyle",
		points: 4e3,
		image: reward_merch_default,
		stock: 0,
		terms: "Collect at the customer service counter."
	}
];
var mockExpiry = [
	{
		id: "e1",
		points: 1200,
		expiresAt: "2026-11-30"
	},
	{
		id: "e2",
		points: 2350,
		expiresAt: "2026-12-31"
	},
	{
		id: "e3",
		points: 880,
		expiresAt: "2027-01-31"
	},
	{
		id: "e4",
		points: 4100,
		expiresAt: "2027-03-31"
	}
];
var useMemberStore = create((set, get) => ({
	member: mockMember,
	points: mockBalance,
	transactions: mockTransactions,
	updateMember: (patch) => set((s) => ({ member: {
		...s.member,
		...patch
	} })),
	redeem: (reward) => {
		const { points, transactions } = get();
		if (reward.stock <= 0) return {
			ok: false,
			reason: "out_of_stock"
		};
		if (points < reward.points) return {
			ok: false,
			reason: "insufficient"
		};
		const balance = points - reward.points;
		const tx = {
			id: `t-${Date.now()}`,
			reference: `TXN-${Math.floor(1e5 + Math.random() * 899999)}`,
			type: "redeemed",
			points: reward.points,
			date: (/* @__PURE__ */ new Date()).toISOString(),
			branch: "Galaxy Reward App",
			description: reward.name,
			balanceAfter: balance
		};
		set({
			points: balance,
			transactions: [tx, ...transactions]
		});
		return {
			ok: true,
			tx
		};
	}
}));
//#endregion
export { useMemberStore as i, mockPromotions as n, mockRewards as r, mockExpiry as t };
