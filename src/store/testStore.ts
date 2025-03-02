import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { zustandStorage } from "./mmkv-storage";
export interface Test {
  id: string;
  title: string;
  amount: string;
  description: string;
}

export interface TestState {
  transactions: Test[];
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<TestState>()(
  persist(
    (set, get) => ({
      transactions: [],
      balance: () =>
        get().transactions.reduce((acc, t) => acc + parseFloat(t.amount), 0),
      clearTransactions: () => set({ transactions: [] }),
    }),
    {
      name: "test",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
