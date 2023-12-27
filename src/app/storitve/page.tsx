import Services from "./Services";

import Image from "next/image";
import Banner from "../../../public/images/image8.jpg";

export default function page() {
	return (
		<section className="flex flex-col">
			<Image
				src={Banner}
				className="w-full h-96 md:mt-24 object-cover object-left"
				alt="Banner"
				priority={true}
			></Image>
			<Services></Services>
		</section>
	);
}
