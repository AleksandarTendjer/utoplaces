import { create } from "zustand";
import { persist } from "zustand/middleware";

type TableState = {
	pageIndex: number;
	pageSize: number;
	setPagination: (pageIndex: number, pageSize: number) => void;
};

export const useTableStorage = create<TableState>()(
	persist(
		(set) => ({
			pageIndex: 0,
			pageSize: 10,
			setPagination: (pageIndex: number, pageSize: number) =>
				set({ pageIndex, pageSize }),
		}),
		{
			name: "table-storage",
		}
	)
);
