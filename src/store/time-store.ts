import { create } from "zustand";

interface TimeInterface {
    timeDown: boolean;
    timeChange: () => void
}

export const useTimeStore = create<TimeInterface>( (set) => ({
    timeDown: true,
    timeChange: () => set(() => ({timeDown: false}))
}) )






