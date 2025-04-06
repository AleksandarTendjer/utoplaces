import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fervowc0keln1h7g.public.blob.vercel-storage.com",
			},
		],
	},
};

export default nextConfig;
