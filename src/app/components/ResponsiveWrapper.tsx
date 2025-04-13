"use client";

import Container from "./Container";

export default function ResponsiveWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="w-full p-4 block sm:hidden">{children}</div>

			<Container className="p-4 mx-8 sm:m-8 max-w-[calc(100vw-4rem)] sm:max-w-none hidden sm:block">
				{children}
			</Container>
		</>
	);
}
