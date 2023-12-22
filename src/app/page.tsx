import About from "./About";
import Landing from "./Landing";
import Reviews from "./Reviews";
// import Info from "./Info";
import Location from "./Location";
import Contact from "./Contact";

import { Sarabun, Playfair_Display } from "next/font/google";

const sarabun = Sarabun({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});
const playfair = Playfair_Display({ subsets: ["latin"] });

// ${playfair.className}

export default function Home() {
	return (
		<main className={`${sarabun.className}  flex flex-col min-h-screen`}>
			<Landing></Landing>
			<About></About>
			<Reviews></Reviews>
			{/* <Info></Info> */}
			<Location></Location>
			<Contact></Contact>
		</main>
	);
}
