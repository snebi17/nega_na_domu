import Image from "next/image";
import Logo from "../../public/images/Logo.svg";

export default function Footer() {
	return (
		<footer className="w-full h-48 flex flex-col justify-center items-center md:items-end bg-cream p-8 md:p-32">
			<div className="flex items-center">
				<Image src={Logo} className="w-12 h-12" alt="Logo"></Image>
				<h1 className="uppercase text-xl md:text-2xl lg:text-3xl">
					<strong>Srečna</strong> leta
				</h1>
			</div>
			<small className="text-xs md:text-sm lg:text-md">
				Vse pravice pridržane © {new Date().getFullYear()}
			</small>
		</footer>
	);
}
