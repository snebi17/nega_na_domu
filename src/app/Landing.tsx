import Image from "next/image";

import Background from "../../public/images/background.jpg";

export default function Landing() {
	return (
		<section className="w-full h-screen flex items-center">
			<div className="container flex flex-col justify-center">
				<Image
					className="w-full h-screen object-cover"
					alt="Background"
					src={Background}
					style={{ filter: "brightness(50%)" }}
				></Image>
				<div className="absolute left-8 md:left-32">
					<h1 className="text-3xl md:text-5xl font-black text-opaqueWhite">
						Vaša skrb, njihov dom
					</h1>
					<p className="text-lg md:text-2xl font-light text-opaqueWhite">
						Spoštujemo vaše najdražje s srcem in skrbnostjo
					</p>
				</div>
			</div>
		</section>
	);
}
