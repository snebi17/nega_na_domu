"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

let clients: { name: string; location: string; review: string }[] = [
	{
		name: "Andreja",
		location: "Ljubljana",
		review: "Elda in njena ekipa, že dva meseca vsakodnevno strokovno poskrbi tudi za mojega težko pokretnega očeta, da je čist in urejen. Prav tako poskrbi za socializacijo moje mame, ki je v prvem statudiju demence. Tako Elda kot njene sodelavke v ekipi s svojo empatičnostjo prinesejo s seboj dobro energijo, kar pozitivno vpliva na dobro voljo staršev in tudi mojo, saj me vsaj za čas ko je pri nas, razbremeni skrbi za moje roditelje.",
	},
	{
		name: "Janez",
		location: "Ljubljana",
		review: "Ko je Elda začela skrbeti za mojega očeta, se mi je odvalil velik kamen s srca, ker ima oče zdaj na voljo pomoč pri vsakdanjih opravilih in spremstvo na sprehodih. Poleg tega ima tudi bolj zapolnjene in organizirane dneve, kar je gotovo dobro. Še posebej pa sem hvaležna za Eldino pomoč, kadar oče zboli, saj bi sama zelo težko vse zorganizirala, poleg tega pa Elda veliko bolje pozna ljudi, ustanove in organizacije, ki se ukvarjajo s pomočjo starejšim in mi lahko svetuje, kaj je treba narediti.",
	},
	{
		name: "Maja",
		location: "Grosuplje",
		review: "Gospa Elda nam je priskočila na pomoč, ko je bilo nenadoma potrebno našega 94 let starega očeta vsakodnevno obiskovati in mu nuditi jutranjo nego in terapijo. Natančno in hitro se je uspela naučiti strokovnega povijanja nog, kar je v kombinaciji z zdravili pripeljalo do postopnega občutnega lokalnega izboljšanja, s svojo dobro voljo pa je vplivala na izboljšano počutje in občutek varnosti tako oskrbovancu kot svojcem.",
	},
	{
		name: "Miha",
		location: "Ljubljana",
		review: "Mojim staršem in naši družini so gospa Elda in njeni sodelavki v veliko pomoč. S profesionalnim pristopom in prijazno skrbjo lajšajo vsakodnevno življenje staršem in jima prinašajo pozitivno energijo. Družina ve, da sta v varnih rokah. Toplo priporočam!",
	},
];

export default function Reviews() {
	return (
		<section className="w-full h-full bg-opaqueWhite" id="mnenja">
			<div className="container flex flex-col mx-auto align-center p-8 md:p-32">
				<div className="flex mb-8">
					<div className="flex-grow bg-black my-auto h-[2px] mr-4"></div>
					<h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
						Kaj pravijo naše stranke?
					</h1>
				</div>
				<Swiper
					breakpoints={{
						640: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					}}
					slidesPerView={1}
					pagination={{ type: "bullets" }}
					modules={[Pagination]}
					className="h-full w-full flex justify-center"
					effect="coverflow"
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					style={{ zIndex: 0 }}
				>
					{clients.map((client, index) => (
						<SwiperSlide key={index}>
							<div className="flex flex-col justify-center text-center">
								<h1 className="text-lg md:text-xl lg:text-2xl font-bold">
									{client.name}, {client.location}
								</h1>
								<p className="text-md md:text-lg lg:text-xl font-light pt-2">
									{client.review}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
