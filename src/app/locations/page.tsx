import TanstackTable from "../components/TanstackTable";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { LocationColumns } from "../components/TanstackTable";

// Define columns

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
	return <TanstackTable dataItems={locationItems} columns={LocationColumns} />;
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
