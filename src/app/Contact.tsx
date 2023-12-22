import Image from "next/image";
import Picture from "../../public/images/image9.jpg";

import {
	PhoneIcon,
	ChatBubbleBottomCenterTextIcon,
	MapPinIcon,
	ClockIcon,
} from "@heroicons/react/24/solid";

export default function Contact() {
	return (
		<section
			className="w-full h-1/2 flex flex-col md:flex-row p-8 pt-4 md:p-32 md:pt-16 md:gap-16 bg-opaqueWhite"
			id="kontakt"
		>
			<div className="container flex flex-col mx-auto justify-center">
				<div className="flex mb-4">
					<div className="flex flex-grow bg-black my-auto h-1 mr-4"></div>
					<h1 className="text-3xl font-bold text-right">Kontakt</h1>
				</div>
				<div className="flex flex-col md:flex-row md:justify-between mb-4">
					<div className="w-full h-content flex flex-col items-left justify-center text-lg">
						<p className="flex items-center">
							<PhoneIcon className="w-8 h-8 mr-4"></PhoneIcon>
							<a
								href="tel:+38631002001"
								className="hover:text-cream duration-200 ease-in-out"
							>
								+386 31 002 001
							</a>
						</p>
						<p className="flex items-center my-4">
							<ChatBubbleBottomCenterTextIcon className="w-8 h-8 mr-4"></ChatBubbleBottomCenterTextIcon>
							{/* info@srecnaleta.si */}
							srecna.leta@gmail.com
						</p>
						<p className="flex items-center mb-4">
							<MapPinIcon className="w-8 h-8 mr-4"></MapPinIcon>
							Trg komandanta Staneta 8
						</p>
						<p className="flex items-center">
							<ClockIcon className="w-8 h-8 mr-4"></ClockIcon>
							Vse dni v tednu od 7:00 do 22:00
						</p>
					</div>
				</div>
			</div>
			<Image src={Picture} alt="Cozy" className="w-full md:w-1/2"></Image>
		</section>
	);
}
