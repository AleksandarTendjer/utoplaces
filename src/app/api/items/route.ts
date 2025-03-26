export const maxDuration = 10;
import { getItems } from "@/lib/items";
import { NextResponse } from "next/server";

export async function GET() {
	const items = await getItems();

	return NextResponse.json(items);
}
