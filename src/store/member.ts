import { create } from "zustand";
import { mockBalance, mockMember, mockTransactions } from "@/data/mock";
import type { Member, Reward, Transaction } from "@/types";

interface MemberState {
  member: Member;
  points: number;
  transactions: Transaction[];
  updateMember: (patch: Partial<Member>) => void;
  redeem: (reward: Reward) => { ok: true; tx: Transaction } | { ok: false; reason: "insufficient" | "out_of_stock" };
}

export const useMemberStore = create<MemberState>((set, get) => ({
  member: mockMember,
  points: mockBalance,
  transactions: mockTransactions,
  updateMember: (patch) => set((s) => ({ member: { ...s.member, ...patch } })),
  redeem: (reward) => {
    const { points, transactions } = get();
    if (reward.stock <= 0) return { ok: false, reason: "out_of_stock" };
    if (points < reward.points) return { ok: false, reason: "insufficient" };
    const balance = points - reward.points;
    const tx: Transaction = {
      id: `t-${Date.now()}`,
      reference: `TXN-${Math.floor(100000 + Math.random() * 899999)}`,
      type: "redeemed",
      points: reward.points,
      date: new Date().toISOString(),
      branch: "Galaxy Reward App",
      description: reward.name,
      balanceAfter: balance,
    };
    set({ points: balance, transactions: [tx, ...transactions] });
    return { ok: true, tx };
  },
}));
