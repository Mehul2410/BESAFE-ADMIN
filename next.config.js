module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "https://besafebackend-production-1132.up.railway.app/:path*",
			},
		];
	},
};
