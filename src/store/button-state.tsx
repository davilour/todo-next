import { create } from "zustand";

type ButtonStates = {
  locked: boolean;
  lock: () => void;
  unlock: () => void;
};

export const useButtonState = create<ButtonStates>((set) => ({
    locked: false,
    lock: () => set({locked: true}),
    unlock: () => set({locked: false}),
}))
