import { afterEach, describe, expect, it } from "vitest";
import { useAuthStore } from "@/store/auth";

afterEach(() => useAuthStore.getState().signOut());

describe("authentication state", () => {
  it("starts signed out", () => {
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });

  it("can sign in and out", () => {
    useAuthStore.getState().signIn();
    expect(useAuthStore.getState().isAuthenticated).toBe(true);

    useAuthStore.getState().signOut();
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });
});