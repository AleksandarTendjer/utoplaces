import { ReactNode } from "react";
import { WithId } from "mongodb";

export interface NavbarItem {
	title: string;
	icon: ReactNode;
	path: string;
}
export interface NavbarProps {
	navItems: NavbarItem[];
}
export interface ItemData extends Omit<WithId<Document>, "location"> {
	type: string;
	name: string;
	description: string;
	location: string;
	current_status: string;
}
