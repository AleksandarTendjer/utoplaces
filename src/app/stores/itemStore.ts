import { ItemData } from "@/types";
import { create } from "zustand";

type ItemStore = {
	selectedItem: ItemData | null;
	setSelectedItem: (item: ItemData) => void;
};

export const useItemStore = create<ItemStore>()((set) => ({
	selectedItem: null,
	setSelectedItem: (item) => set({ selectedItem: item }),
}));
