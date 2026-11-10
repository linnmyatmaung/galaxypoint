// Galaxy Point conversion rules — the only rules the program defines.
export const MMK_PER_EARNED_POINT = 200; // 200 MMK spent = 1 point
export const MMK_VALUE_PER_POINT = 1; // 1 point = 1 MMK

export const pointsFromSpend = (mmk: number) => Math.floor(mmk / MMK_PER_EARNED_POINT);
export const pointsToMmk = (points: number) => points * MMK_VALUE_PER_POINT;

export const fmt = (n: number) => n.toLocaleString("en-US");

export const daysUntil = (iso: string, now = new Date()) =>
  Math.ceil((new Date(iso).getTime() - now.getTime()) / 86_400_000);

export const profileFields = ["fullName", "phone", "email", "dateOfBirth", "gender", "address", "avatarUrl"] as const;

export function profileCompletion(m: Record<(typeof profileFields)[number], unknown>) {
  const missing = profileFields.filter((f) => !m[f]);
  return { percent: Math.round(((profileFields.length - missing.length) / profileFields.length) * 100), missing };
}
