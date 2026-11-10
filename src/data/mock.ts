import type { ExpiryRecord, Member, Promotion, Reward, Transaction } from "@/types";
import promoMall from "@/assets/promo-mall.jpg";
import promoDining from "@/assets/promo-dining.jpg";
import promoCinema from "@/assets/promo-cinema.jpg";
import rVoucher from "@/assets/reward-voucher.jpg";
import rCoffee from "@/assets/reward-coffee.jpg";
import rMovie from "@/assets/reward-movie.jpg";
import rMerch from "@/assets/reward-merch.jpg";

export const mockMember: Member = {
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
  joinedAt: "2023-03-12",
};

const branches = ["Junction City", "Myanmar Plaza", "Times City", "Junction Square", "Ocean Center"] as const;

const raw: Omit<Transaction, "balanceAfter">[] = [
  { id: "t1", reference: "TXN-884201", type: "earned", points: 245, date: "2026-11-08T15:24:00", branch: branches[0], description: "Purchase 49,000 MMK" },
  { id: "t2", reference: "TXN-884115", type: "redeemed", points: 3000, date: "2026-11-05T12:10:00", branch: branches[1], description: "Coffee voucher" },
  { id: "t3", reference: "TXN-883972", type: "earned", points: 610, date: "2026-11-02T18:42:00", branch: branches[2], description: "Purchase 122,000 MMK" },
  { id: "t4", reference: "TXN-883410", type: "earned", points: 92, date: "2026-10-27T11:05:00", branch: branches[0], description: "Purchase 18,400 MMK" },
  { id: "t5", reference: "TXN-882990", type: "redeemed", points: 5000, date: "2026-10-19T19:30:00", branch: branches[3], description: "Cinema ticket" },
  { id: "t6", reference: "TXN-882512", type: "earned", points: 1350, date: "2026-10-12T14:15:00", branch: branches[4], description: "Purchase 270,000 MMK" },
  { id: "t7", reference: "TXN-881877", type: "earned", points: 430, date: "2026-09-30T16:48:00", branch: branches[1], description: "Purchase 86,000 MMK" },
  { id: "t8", reference: "TXN-881204", type: "earned", points: 2800, date: "2026-09-14T13:20:00", branch: branches[2], description: "Purchase 560,000 MMK" },
  { id: "t9", reference: "TXN-880533", type: "redeemed", points: 10000, date: "2026-08-28T17:02:00", branch: branches[0], description: "Shopping voucher" },
  { id: "t10", reference: "TXN-879961", type: "earned", points: 8960, date: "2026-08-03T10:40:00", branch: branches[4], description: "Purchase 1,792,000 MMK" },
  { id: "t11", reference: "TXN-879002", type: "earned", points: 21120, date: "2026-06-21T15:55:00", branch: branches[3], description: "Purchase 4,224,000 MMK" },
];

export const mockBalance = 18_607;

// Running balances computed backward from the current balance (newest first).
export const mockTransactions: Transaction[] = (() => {
  let bal = mockBalance;
  return raw.map((t) => {
    const row = { ...t, balanceAfter: bal };
    bal = t.type === "earned" ? bal - t.points : bal + t.points;
    return row;
  });
})();

export const mockPromotions: Promotion[] = [
  { id: "p1", title: "Year-End Shopping Fest", description: "Shop across participating malls and enjoy member-only deals.", image: promoMall, expiresAt: "2026-12-31" },
  { id: "p2", title: "Café Week", description: "Member offers at food court cafés this week.", image: promoDining, expiresAt: "2026-11-23" },
  { id: "p3", title: "Movie Nights", description: "Redeem cinema tickets with your Galaxy points.", image: promoCinema, expiresAt: "2026-12-15" },
];

export const mockRewards: Reward[] = [
  { id: "r1", name: "10,000 MMK Shopping Voucher", description: "Use at any participating mall outlet.", category: "Vouchers", points: 10000, image: rVoucher, stock: 42, featured: true, terms: "Valid for 30 days after redemption. Not exchangeable for cash." },
  { id: "r2", name: "5,000 MMK Shopping Voucher", description: "Use at any participating mall outlet.", category: "Vouchers", points: 5000, image: rVoucher, stock: 120, terms: "Valid for 30 days after redemption. Not exchangeable for cash." },
  { id: "r3", name: "Iced Latte", description: "One regular iced latte at participating cafés.", category: "Dining", points: 3000, image: rCoffee, stock: 85, featured: true, terms: "Valid for 14 days. One per visit." },
  { id: "r4", name: "Cinema Ticket + Popcorn", description: "One standard 2D ticket with a small popcorn.", category: "Entertainment", points: 5000, image: rMovie, stock: 18, featured: true, terms: "Subject to seat availability. Valid for 30 days." },
  { id: "r5", name: "Galaxy Tote & Earbuds", description: "Limited Galaxy Reward canvas tote with wireless earbuds.", category: "Lifestyle", points: 25000, image: rMerch, stock: 6, terms: "Collect at the customer service counter." },
  { id: "r6", name: "Galaxy Canvas Tote", description: "Sturdy canvas tote for everyday shopping.", category: "Lifestyle", points: 4000, image: rMerch, stock: 0, terms: "Collect at the customer service counter." },
];

export const mockExpiry: ExpiryRecord[] = [
  { id: "e1", points: 1200, expiresAt: "2026-11-30" },
  { id: "e2", points: 2350, expiresAt: "2026-12-31" },
  { id: "e3", points: 880, expiresAt: "2027-01-31" },
  { id: "e4", points: 4100, expiresAt: "2027-03-31" },
];
