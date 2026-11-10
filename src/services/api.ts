// Mock API layer. Replace these functions with real backend calls later;
// the UI only depends on these signatures.
import { mockExpiry, mockPromotions, mockRewards } from "@/data/mock";
import { useMemberStore } from "@/store/member";
import type { ExpiryRecord, Promotion, Reward, Transaction } from "@/types";

const delay = (ms = 600) => new Promise((r) => setTimeout(r, ms));

export async function fetchTransactions(): Promise<Transaction[]> {
  await delay();
  return useMemberStore.getState().transactions;
}

export async function fetchExpiry(): Promise<ExpiryRecord[]> {
  await delay();
  return mockExpiry;
}

export async function fetchRewards(): Promise<Reward[]> {
  await delay(300);
  return mockRewards;
}

export async function fetchPromotions(): Promise<Promotion[]> {
  return mockPromotions;
}

/**
 * DEMO ONLY: generates a client-side placeholder token for the member QR.
 * Real dynamic QR tokens must be issued and validated by the backend.
 */
export function generateDemoQrToken(memberId: string) {
  const nonce = Math.random().toString(36).slice(2, 10).toUpperCase();
  return `DEMO|${memberId}|${Date.now()}|${nonce}`;
}
