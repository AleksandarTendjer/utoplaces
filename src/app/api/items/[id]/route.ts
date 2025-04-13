import { getItem } from "@/lib/item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const item = await getItem((await params).id);
	return NextResponse.json(item);
}
