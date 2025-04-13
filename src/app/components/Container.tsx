export default function Container({
	className,
	children,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) {
	return (
		<div
			className={` ${className} text-xs sm:text-sm bg items-center justify-between flex flex-col   bg-gray-300/35 border  border-gray-200/50  shadow-xl shadow-white/50 rounded-lg !font-[RoSpritendo]`}>
			{children}
		</div>
	);
}
