import Image from "next/image";
import Map from "../../public/images/map.svg";
import Picture from "../../public/images/image4.jpg";

export default function Location() {
	return (
		<section
			className="w-full h-1/2 flex flex-col md:flex-row md:gap-16 p-8 pb-4 md:p-32 md:pb-16 bg-transparentWhite"
			id="lokacija"
		>
			<Image
				src={Picture}
				alt="Location"
				className="w-full md:w-1/2 order-2 md:order-1 mb-4 md:mb-0 object-contain"
			></Image>
			<div className="container flex flex-col mx-auto align-center order-1 md:order-2 mb-4 md:mb-0">
				<div className="flex mb-4">
					<h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-right">
						Lokacija
					</h1>
					<div className="flex flex-grow bg-black my-auto h-[2px] ml-4"></div>
				</div>
				<div className="flex flex-col">
					<Image
						src={Map}
						alt="Map"
						className="w-full h-full mb-4 order-1 md:order-2"
					></Image>
					<div className="flex flex-col text-md md:text-lg lg:text-xl">
						<h1 className="text-lg md:text-xl lg:text-2xl font-medium">
							Trg komandanta Staneta 8, 1000 Ljubljana
						</h1>
						<p className="font-light">
							Storitve so na voljo po celotni Ljubljani z okolico
							(Grosuplje in Škofljica).
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
