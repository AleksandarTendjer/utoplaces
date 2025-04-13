"use client";
import { useItemStore } from "@/app/stores/itemStore";
import Image from "next/image";
import { ItemData } from "@/types";
import { useEffect } from "react";

export default function ItemDetails({ item }: { item: ItemData }) {
	const setSelectedItem = useItemStore((state) => state.setSelectedItem);

	useEffect(() => {
		setSelectedItem(item);
	}, [item]);

	let statusImage = "/imgs/frutigerGreenBall.png";
	if (item.current_status === "Redesigned") {
		statusImage = "/imgs/yellowOrangeOrb.png";
	} else if (item.current_status === "Inactive") {
		statusImage = "/imgs/frutigerRed.png";
	}

	return (
		<>
			<h1 className="text-center items-center justify-center text-2xl mt-5 tracking-tight !font-[Spin_Cycle_OT_Regular] text-frutigerGreen sm:text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
				{item.name}
			</h1>
			<div className="w-full h-full grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-3 !font-[TypelightSans] text-gray-100/80 space-y-2 sm:space-y-0">
				<div className="w-full p-2 col-span-1 row-span-1 sm:row-span-2 border border-gray-200 rounded-lg shadow-2xl bg-gray-300/70 bg-[url(/imgs/clouds.png)] bg-center bg-contain bg-no-repeat bg-blend-hue">
					<Image
						src={item.image || "/imgs/notFound.png"}
						className="w-full h-64 mb-5 rounded-xl"
						width={500}
						height={500}
						quality={100}
						alt="item image"
					/>
					<div className="mb-2 flex flex-row drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Status:{" "}
						<span className="flex flex-row">
							{item.current_status}{" "}
							<Image
								src={statusImage}
								alt="statusImage"
								width={20}
								height={20}
								className="w-5 h-5"
								quality={100}
							/>
						</span>
					</div>
					<div className="mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Location: <span>{item.location}</span>
					</div>
					<div className="mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Type: <span>{item.type}</span>
					</div>
				</div>
				<div className=" col-span-1 row-span-1 sm:col-span-2 sm:row-span-3 sm:ml-5 p-4 border border-gray-200 rounded-lg shadow-2xl bg-gray-300/70 text-balance text-lg sm:text-lg bg-[url(/imgs/sprout.png)] bg-center bg-contain bg-no-repeat bg-blend-hue">
					<span className="drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)]">
						{item.description}
					</span>
				</div>
			</div>
		</>
	);
}
