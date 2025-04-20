import "../globals.css";
import Navbar from "../components/Navbar";
import { NavbarItem } from "@/types";
import Image from "next/image";

const navItems: NavbarItem[] = [
	{
		title: "Home",
		icon: (
			<Image
				src="/imgs/home2.png"
				alt="Home"
				fill
				className="h-full w-full object-contain"
			/>
		),
		path: "/",
	},
	{
		title: "Locations",
		icon: (
			<Image
				src="/imgs/magnifier2.png"
				alt="Locations"
				fill
				className="h-full w-full object-contain self-center"
			/>
		),
		path: "/locations",
	},
];
export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar navItems={navItems} />
			{children}
		</>
	);
}
