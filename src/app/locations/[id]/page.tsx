"use client";
import Container from "@/app/components/Container";
import { useItemStore } from "@/app/stores/itemStore";
import Image from "next/image";

export default function ItemPage() {
	const selectedItem = useItemStore((state) => state.selectedItem);

	let statusImage = "/imgs/frutigerGreenBall.png";
	if (selectedItem?.current_status === "Redesigned") {
		statusImage = "/imgs/yellowOrangeBall.png";
	} else if (selectedItem?.current_status === "Inactive") {
		statusImage = "/imgs/frutigerRed.png";
	}
	return (
		<div className="w-full min-h-screen flex">
			<Container>
				<h1 className=" text-center  tems-center justify-center text-2xl mt-5 tracking-tight !font-[Spin_Cycle_OT_Regular] text-frutigerGreen sm:text-7xl ">
					{selectedItem?.name}
				</h1>
				<div className="  w-full h-full grid grid-cols-3 grid-rows-3  !font-[Pretendo_Regular] text-gray-100/80 ">
					<div className="w-full p-2 col-span-1 row-span-2 border border-gray-200 rounded-lg shadow-2xl bg-gray-300/70">
						<Image
							src={selectedItem?.image || "/imgs/notFound.png"}
							className="w-full h-50 mb-5 rounded-xl "
							width={100}
							height={100}
							quality={100}
							alt="item image"
						/>
						<div className="mb-2 flex flex-row">
							Status:{" "}
							<span className="flex flex-row">
								{selectedItem?.current_status}{" "}
								<Image
									src={statusImage}
									alt="statusImage"
									width={100}
									height={100}
									className="w-5 h-5"
								/>
							</span>
						</div>
						<div className="mb-2">
							Location: <span> {selectedItem?.location}</span>
						</div>
						<div className="mb-2">
							Type: <span>{selectedItem?.type}</span>
						</div>
					</div>
					<div className="col-span-2 row-span-3 ml-5 p-4 border border-gray-200 rounded-lg shadow-2xl bg-gray-300/70">
						{selectedItem?.description}
					</div>
				</div>
			</Container>
		</div>
	);
}
