import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Srečna leta",
	description: "",
};

import Header from "./Header";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SpeedInsights />
				<Header></Header>
				{children}
				<Analytics />
				<Footer></Footer>
			</body>
		</html>
	);
}
