import TanstackTable from "../components/TanstackTable";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { LocationColumns } from "../components/TanstackTable";
import ResponsiveWrapper from "../components/ResponsiveWrapper";

async function getData() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/items`
		);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			console.error("Failed to fetch locations from API");
		}
	} catch (error) {
		console.error("Error fetching locations:", error);
	}
}
async function DataContent() {
	const locationItems = await getData();
	return (
		<TanstackTable dataItems={locationItems || []} columns={LocationColumns} />
	);
}

export default function Locations() {
	return (
		<div className="w-full min-h-screen items-center justify-center flex p-4">
			<Suspense fallback={<Spinner />}>
				<ResponsiveWrapper>
					<DataContent />
				</ResponsiveWrapper>
			</Suspense>
		</div>
	);
}
