import Image from "next/image";
import Map from "../../public/images/map.svg";
import Image1 from "../../public/images/image1.jpg";

import {
	PhoneIcon,
	ChatBubbleBottomCenterTextIcon,
	MapPinIcon,
	ClockIcon,
} from "@heroicons/react/24/solid";

export default function Info() {
	return (
		<section className="w-full h-1/2" id="info">
			<div className="container flex flex-col mx-auto align-center p-8 md:p-32">
				<div className="flex mb-4">
					<h1 className="text-3xl font-bold text-right">
						Lokacija in kontakt
					</h1>
					<div className="hidden md:flex flex-grow bg-black my-auto h-1 ml-4"></div>
				</div>
				<div className="flex flex-col md:flex-row md:justify-between mb-4">
					<Image
						src={Map}
						alt="Map"
						className="w-full h-full md:w-1/2 md:h-1/2 mb-4 md:mb-0"
					></Image>
					<div className="flex flex-col text-lg">
						<h1 className="text-xl font-medium">
							Trg komandanta Staneta 8, 1000 Ljubljana
						</h1>
						<p className="text-lg font-light">
							Storitve so na voljo po celotni Ljubljani z okolico
							(Grosuplje in Škofljica).
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row md:justify-between mb-4">
					<div className="w-full h-content flex flex-col items-left justify-center text-lg">
						<p className="flex items-center">
							<PhoneIcon className="w-8 h-8 mr-4"></PhoneIcon> 031
							002 001
						</p>
						<p className="flex items-center my-4">
							<ChatBubbleBottomCenterTextIcon className="w-8 h-8 mr-4"></ChatBubbleBottomCenterTextIcon>{" "}
							info@srecnaleta.si
						</p>
						<p className="flex items-center mb-4">
							<MapPinIcon className="w-8 h-8 mr-4"></MapPinIcon>
							Trg komandanta Staneta 8
						</p>
						<p className="flex items-center">
							<ClockIcon className="w-8 h-8 mr-4"></ClockIcon>
							po dogovoru
						</p>
					</div>
					<Image
						src={Image1}
						alt="Image1"
						className="w-full h-full md:w-1/2 md:h-1/2"
					></Image>
				</div>
			</div>
		</section>
	);
}
