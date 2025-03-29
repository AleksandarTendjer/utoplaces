"use client";

export default function Home() {
	return (
		<div className="w-full min-h-screen items-center justify-center flex ">
			<div className=" z-10 m-20 sm:mx-auto max-w-2xl p-24 bg-gray-300/35 border-1  border-gray-200/50  inset-shadow-lg shadow-lg rounded-lg items-center justify-center flex">
				<div className="w-full h-full  bg-[url(/imgs/flares_4.png)] bg-no-repeat">
					<div className="text-center ">
						<h1 className="text-5xl  tracking-tight !font-[Spin_Cycle_OT_Regular] text-gray-900 sm:text-7xl">
							Howdy
						</h1>
						<p className="mt-8 text-md !font-[Pretendo_Regular] text-teal-300/60 sm:text-xl/8">
							Explore various fruitger aero places over the globe with us!
						</p>

						<div className="mt-10 flex items-center justify-center gap-x-6">
							<img src="/imgs/earthglobe3.gif" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
