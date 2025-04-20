import { Suspense } from "react";
import Container from "@/app/components/Container";
import Spinner from "@/app/components/Spinner";
import ItemDetails from "./itemDetails";
import Image from "next/image";
import Link from "next/link";

async function ServerItemContent({ id }: { id: string }) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`
	);

	if (!response.ok) throw new Error("Failed to fetch item");
	const item = await response.json();

	return <ItemDetails item={item} />;
}

export default async function ItemPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div className="w-full min-h-screen grid grid-cols-1 grid-rows-12 ">
			<Suspense fallback={<Spinner />}>
				<Link className="w-full row-span-1 col-span-1" href={"/locations"}>
					<Image
						src={"/imgs/back.gif"}
						width={100}
						height={100}
						alt="back-button"
						className="left-10 align-top items-baseline p-5"
					/>
				</Link>
				<Container className=" p-4 m-4 sm:m-6 row-span-11 col-span-1">
					<ServerItemContent id={id} />
				</Container>
			</Suspense>
		</div>
	);
}
