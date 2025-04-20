import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Utoplaces",
	description: "Explore IRL utopian locations",
	icons: {
		icon: "/imgs/globe.ico",
		apple: "/imgs/globe-apple.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="min-h-[100dvh]  flex flex-col bg-[url(/imgs/bg5.jpg)] bg-center bg-cover ">
					<main className="flex-1 relative overflow-y-auto max-w-[100vw] max-h-[100vh]  bg-skybox overflow-x-clip">
						{children}
					</main>
					<footer className=" sticky text-center text-xs sm:text-base py-4  text-slate-400 w-full">
						© 2025{" "}
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
