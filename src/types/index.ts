import { ReactNode } from "react";

export interface NavbarItem {
	title: string;
	icon: ReactNode;
	path: string;
}
export interface NavbarProps {
	navItems: NavbarItem[];
}
