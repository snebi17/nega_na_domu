import Image from "next/image";
import Picture from "../../public/images/about.png";

export default function About() {
	return (
		<section
			className="w-full h-fit flex flex-col md:gap-8 items-center p-8 md:p-32 bg-beigeCream"
			id="o-nas"
		>
			<div className="container flex flex-col justify-center text-md md:text-lg lg:text-xl text-transparentWhite">
				<div className="flex mb-4">
					<h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-right">
						O nas
					</h1>
					<div className="flex flex-grow bg-transparentWhite my-auto h-[2px] ml-4"></div>
				</div>
				<p className="p-3 pl-0">
					Kdo sem in kako sem prišla do ideje <strong>SREČNA </strong>
					LETA?
				</p>
				<p className="p-3 pl-0 pt-0">
					Mama me je vedno učila, da je treba biti zelo spoštljiv do
					starejših. Tako je že v otroštvu v meni vzbudila ljubezen do
					druženja in skrb do ostarelih. Že v otroštvu sem rada
					skrbela in pomagala babici in dedku. Ko sem imela 13 let sem
					izgubila očeta in posledično sem bila primorana skrbeti za
					svojo mamo, ki je bila zelo nemočna in žalostna in sem že
					takrat vedela, da bo moje poslanstvo skrb za ljudi.
				</p>
				<p className="p-3 pl-0 pt-0">
					Ko sem dopolnila 15 let sem se usmerila v zdravstvo in z
					vzpodbudo družine sem se vpisala na zdravstveno šolo. Ko sem
					dokončala študij sem se odločila da želim slediti sanjam in
					občutkom in se odločila, da je čas, da odprem svoje
					podjetje. Prišla sem do ideje (pomoč in nega na domu za
					starejše) saj sem se v temu videla že od nekdaj.
				</p>
				<p className="p-3 pl-0 pt-0">
					Idejo za ime podjetja <strong>SREČNA </strong> LETA mi je
					predlagala sestra, ki je rekla, da bom osrečila vsakega
					uporabnika z mojo pozitivnostjo in srečo ki jo imam v sebi
					in je to najbolj primerno ime za moje podjetje oz zame. Zelo
					sem vesela da sem lahko del zgodbe v življenju ljudi, ki me
					potrebujejo. Sem zelo pozitivna, nasmejana. sočutna in topla
					oseba. Prilagodim se vsakemu in upoštevam želje vseh
					uporabnikov, saj mi je njihovo dobro počutje na prvem mestu.
				</p>
			</div>
			<Image
				src={Picture}
				alt="image"
				className="w-full h-full md:w-1/2"
			></Image>
		</section>
	);
}
