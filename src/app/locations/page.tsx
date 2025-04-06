import TanstackTable from "../components/TanstackTable";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { LocationColumns } from "../components/TanstackTable";
import Container from "../components/Container";

async function getData() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/items`
		);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			console.error("Failed to fetch random cat");
		}
	} catch (error) {
		console.error("Error fetchinglocations:", error);
	}
}
async function TableContent() {
	const locationItems = await getData();
	return (
		<Container>
			<TanstackTable dataItems={locationItems} columns={LocationColumns} />
		</Container>
	);
}

export default function Locations() {
	return (
		<div className="w-full min-h-screen items-center justify-center flex">
			<Suspense fallback={<Spinner />}>
				<TableContent />
			</Suspense>
		</div>
	);
}
