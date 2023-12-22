import Pricelist from "./Pricelist";
import Services from "./Services";

import Image from "next/image";
import Banner from "../../../public/images/image8.jpg";

export default function page() {
	return (
		<section className="flex flex-col">
			<Image
				src={Banner}
				className="w-full h-96 mt-24 object-cover object-left md:object-center"
				alt="Banner"
			></Image>
			<Services></Services>
			{/* <Pricelist></Pricelist> */}
		</section>
	);
}
