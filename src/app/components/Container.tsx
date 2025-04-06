export default function Container({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="p-4 m-4 sm:m-6 text-xs sm:text-sm bg items-center justify-between flex flex-col  bg-gray-300/35 border  border-gray-200/50  shadow-xl shadow-white/50 rounded-lg !font-[Pretendo]">
			{children}
		</div>
	);
}
