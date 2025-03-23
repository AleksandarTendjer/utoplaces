"use client";
import { NavbarProps } from "@/types";
import { Dock, DockIcon, DockLabel, DockItem } from "./motion-primitives/Dock";
import { useRouter } from "next/navigation";

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
	const router = useRouter();

	return (
		<div className="absolute top-2 left-1/2 max-w-full -translate-x-1/2">
			<Dock className="items-end pb-3">
				{navItems.map((item, idx) => (
					<DockItem
						key={idx}
						className="aspect-square rounded-full bg-gradient-to-bl from-gray-500 to-gray-400 via-gray-500 "
						onClick={() => {
							console.log("ddd");
							router.push(item.path);
						}}>
						<DockLabel>{item.title}</DockLabel>
						<DockIcon>{item.icon}</DockIcon>
					</DockItem>
				))}
			</Dock>
		</div>
	);
};
export default Navbar;
