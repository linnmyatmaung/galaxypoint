export type Gender = "male" | "female" | "other" | "";

export interface Member {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  avatarUrl: string | null;
  membershipType: string;
  verified: boolean;
  joinedAt: string;
}

export type TransactionType = "earned" | "redeemed";

export interface Transaction {
  id: string;
  reference: string;
  type: TransactionType;
  points: number;
  date: string; // ISO
  branch: string;
  description: string;
  balanceAfter?: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  category: RewardCategory;
  points: number;
  image: string;
  stock: number;
  featured?: boolean;
  terms: string;
}

export type RewardCategory = "Vouchers" | "Dining" | "Entertainment" | "Lifestyle";

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  expiresAt: string;
}

export interface ExpiryRecord {
  id: string;
  points: number;
  expiresAt: string;
}
