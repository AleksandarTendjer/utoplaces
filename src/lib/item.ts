import { ObjectId } from "mongodb";
import clientPromise from "./mongoConnection";
import { ItemData } from "@/types";

export async function getItem(id: string): Promise<ItemData | null> {
	console.log("trying with id", id);

	if (id?.length === 0) {
		return null;
	}
	const client = await clientPromise;
	const db = client.db(process.env.MONGODB_DB);
	const result = await db
		.collection<ItemData>("locations")
		.findOne({ _id: new ObjectId(id) });

	return result;
}
