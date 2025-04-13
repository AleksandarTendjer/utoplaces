"use client";

import Image from "next/image";
import { Magnetic } from "./components/motion-primitives/magnetic";
import { useRouter } from "next/navigation";

export default function Home() {
	const springOptions = { bounce: 0.1 };
	const router = useRouter();

	return (
		<div className="w-full min-h-screen items-center justify-center flex ">
			<div className=" mx-5 z-10 sm:m-20 sm:mx-auto max-w-2xl p-10 sm:p-24 bg-gray-300/35 border-1  bg-[url(/imgs/bgContainerMain.png)]  bg-no-repeat bg-cover bg-center  bg-blend-saturation  border-gray-200/50  inset-shadow-lg shadow-lg rounded-lg items-center justify-center flex">
				<div className="w-full h-full bg-[url(/imgs/sunFlare.png)] bg-no-repeat bg-center bg-blend-color">
					<div className=" text-balance text-center  ">
						<div className="flex flex-row justify-between">
							<Image
								src="/imgs/fishBowl.png"
								className="w-7 h-7 sm:w-10 sm:h-10"
								alt="image"
								width={70}
								height={70}
							/>
							<h1 className="text-3xl  tracking-tight !font-[Spin_Cycle_OT_Regular] drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] text-frutigerGreen sm:text-7xl ">
								Howdy There
							</h1>
							<Image
								src="/imgs/fishBowl.png"
								className="w-7 h-7 sm:w-10 sm:h-10"
								alt="image"
								width={70}
								height={70}
							/>
						</div>

						<p className="mt-8 text-sm !font-[RoSpritendo] text-slate-300/70  drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] sm:text-xl/8 mb-8">
							This webpage is designed to serve a purpose. Its purpose is to
							show in real life late y2k and frutiger era architecture and
							interior design. It is place where we can go to and explore and
							worship the future that we were promised. We`ll it partially
							happened, and this is the proof.
						</p>
						<Magnetic
							intensity={0.2}
							springOptions={springOptions}
							actionArea="global"
							range={200}>
							{" "}
							<button
								type="button"
								className="inline-flex items-center rounded-lg border !font-[RoSpritendo] border-zinc-100  text-slate-200 bg-gradient-to-t from-frutigerGreenButtonDown to-frutigerGreenButtonUp px-4 py-2 text-sm  transition-all duration-200 "
								onClick={() => {
									router.push("/locations");
								}}>
								<Magnetic
									intensity={0.1}
									springOptions={springOptions}
									actionArea="global"
									range={200}>
									<span className="drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)]">
										Show me the locations
									</span>
								</Magnetic>
							</button>
						</Magnetic>

						<div className="w-full flex flex-row justify-between">
							<Image
								src="/imgs/msn1.png"
								className="w-7 h-7 sm:w-14 sm:h-14"
								alt="fishBowl"
								width={70}
								height={70}
							/>
							<Image
								src="/imgs/msn2.png"
								className=" w-7 h-7 sm:w-14 sm:h-14"
								alt="fishBowl"
								width={70}
								height={70}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
