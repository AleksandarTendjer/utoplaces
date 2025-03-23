import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { NavbarItem } from "@/types";
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "FrutigerPlaces",
	description: "Explore frutiger places irl",
};
const navItems: NavbarItem[] = [
	{
		title: "Home",
		icon: (
			<Image
				src="/imgs/home.png"
				alt="Home"
				width={24}
				height={24}
				className="h-full w-full object-contain"
			/>
		),
		path: "/",
	},
	{
		title: "Locations",
		icon: (
			<Image
				src="/imgs/mapPin.png"
				alt="Locations"
				width={26}
				height={24}
				className="h-full w-full object-contain self-center"
			/>
		),
		path: "/locations",
	},
];
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="min-h-[100dvh]  flex flex-col bg-[url(/imgs/bg3.png)] bg-center bg-cover font-sofia font-sans ">
					<main className="flex-1 relative overflow-y-auto max-w-[100vw]  bg-skybox overflow-x-clip">
						<Navbar navItems={navItems} />
						{children}
					</main>
					<footer className=" sticky text-center text-xs sm:text-base py-4  text-slate-400 w-full">
						© 2025
						<a href="https://alextendjer.com" className="underline">
							Aleksandar Tendjer
						</a>
						. All rights reserved.
					</footer>
				</div>
			</body>
		</html>
	);
}
