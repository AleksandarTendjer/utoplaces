"use client";

import Image from "next/image";
import { Magnetic } from "../components/motion-primitives/magnetic";
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
								src="/imgs/fishbowl.png"
								className="w-7 h-7 sm:w-10 sm:h-10"
								alt="image"
								width={70}
								height={70}
							/>
							<h1 className="text-3xl  tracking-tight !font-[Spin_Cycle_OT_Regular] drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] text-frutigerGreen sm:text-7xl ">
								Welcome to Utoplaces
							</h1>
							<Image
								src="/imgs/fishbowl.png"
								className="w-7 h-7 sm:w-10 sm:h-10"
								alt="image"
								width={70}
								height={70}
							/>
						</div>

						<p className="mt-8 text-sm !font-[RoSpritendo] text-slate-200/80  drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] sm:text-xl/8 mb-8">
							This platform is made to help you discover IRL locations, that
							contain a fusion of eco-futurism, dreamy landscapes and in general
							harmony between humans, nature and technology. Here, utopia isn’t
							escapism—it’s already present.
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
										Show me what you’ve got
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
