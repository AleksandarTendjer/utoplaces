import { ReactNode } from "react";
import { WithId } from "mongodb";
import { ColumnDef } from "@tanstack/react-table";

export interface NavbarItem {
	title: string;
	icon: ReactNode;
	path: string;
}
export interface NavbarProps {
	navItems: NavbarItem[];
}
interface BaseItem {
	type: string;
	name: string;
	description: string;
	location: string;
	image: string;
	current_status: string;
}

export type ItemData = WithId<BaseItem>;
export interface TableProps {
	dataItems: ItemData[];
	columns: ColumnDef<ItemData>[];
}
