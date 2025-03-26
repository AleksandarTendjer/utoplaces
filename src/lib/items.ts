import clientPromise from "./mongoConnection";
import { ItemData } from "@/types";

export async function getItems(): Promise<ItemData[] | null> {
	const client = await clientPromise;
	const db = client.db(process.env.MONGODB_DB);

	const result = await db.collection<ItemData>("locations").find().toArray();

	return result;
}
