"use client";

export default function Home() {
	return (
		<div className="w-full min-h-screen items-center justify-center flex ">
			<div className=" z-10 m-20 sm:mx-auto max-w-2xl p-24 bg-gray-300/35 border-1 bg-[url(/imgs/bgMain.png)] bg-no-repeat bg-center  border-gray-200/50  inset-shadow-lg shadow-lg rounded-lg items-center justify-center flex">
				<div className="w-full h-full">
					<div className="text-center ">
						<div className="flex flex-row justify-between">
							<img
								src="/imgs/frutigerRed.png"
								className="w-7 h-7 sm:w-10 sm:h-10"
							/>
							<h1 className="text-3xl  tracking-tight !font-[Spin_Cycle_OT_Regular] text-gray-900 sm:text-7xl ">
								Howdy There
							</h1>
							<img
								src="/imgs/frutigerBlue.png"
								className="w-7 h-7 sm:w-10 sm:h-10"
							/>
						</div>

						<p className="mt-8 text-md !font-[Pretendo_Regular] text-slate-300/70 sm:text-xl/8 mb-8">
							This webpage is designed to serve a purpose. It`s purpose is to
							show in real life late y2k and frutiger era architecture and
							interior design. It is place where we can go to and explore and
							worship the future that we were promised. We`ll it partially
							happened, and this is the proof.
						</p>

						<div className="w-full flex flex-row justify-between">
							<img
								src="/imgs/fishBowl.png"
								className="w-7 h-7 sm:w-14 sm:h-14"
							/>
							<img
								src="/imgs/fishBowl.png"
								className=" w-7 h-7 sm:w-14 sm:h-14"
							/>
							<img
								src="/imgs/fishBowl.png"
								className=" w-7 h-7 sm:w-14 sm:h-14"
							/>
							<img
								src="/imgs/fishBowl.png"
								className="w-7 h-7 sm:w-14 sm:h-14"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
