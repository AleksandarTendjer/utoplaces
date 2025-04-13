import { Suspense } from "react";
import Container from "@/app/components/Container";
import Spinner from "@/app/components/Spinner";
import ItemDetails from "./itemDetails";

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
		<div className="w-full min-h-screen flex">
			<Suspense fallback={<Spinner />}>
				<Container className=" p-4 m-4 sm:m-6">
					<ServerItemContent id={id} />
				</Container>
			</Suspense>
		</div>
	);
}
