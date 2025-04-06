// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				pretendo: ['"Pretendo Regular"', "sans-serif"],
				spincycle: ['"Spin Cycle OT Regular"', "sans-serif"],
			},
			cursor: {
				magnifier: "url(/imgs/magnifierCursor.png), auto",
			},
		},
	},
	plugins: [],
};

export default config;
