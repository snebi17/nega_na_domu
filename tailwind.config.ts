import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			opaqueWhite: "#FCFBF7",
			transparentWhite: "#F3F1EB",
			grey: "#E6E2D7",
			cream: "#C7C2B5",
			beigeCream: "#C0B7A4",
			blue: "#316186",
			black: "#171717",
		},
	},
	// # 535353
	// # C0B7A4
	plugins: [],
};
export default config;
