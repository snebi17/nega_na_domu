export default function Services() {
	return (
		<section className="w-full h-full bg-transparentWhite" id="storitve">
			<div className="container flex flex-col mx-auto align-center p-8 md:p-32">
				<div className="flex mb-4">
					<h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
						Storitve, ki jih nudimo
					</h1>
					<div className="flex-grow bg-black my-auto h-[2px] ml-4"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 md:gap-4 text-lg md:text-xl lg:text-2xl">
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">01</small>
						<h1 className="font-bold">
							Pomoč pri vsakodnevnih opravilih in postrežbi
						</h1>
						<div className="flex justify-between w-full font-light">
							<p>Lažja oblika</p>
							<span className="font-bold">18€</span>
						</div>
						<div className="flex justify-between w-full font-light">
							<p>Težja oblika</p>
							<span className="font-bold">20€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">02</small>
						<h1 className="font-bold">Spremstvo in družabništvo</h1>
						<div className="flex justify-between w-full font-light">
							<p>Storitev</p>
							<span className="font-bold">17€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">03</small>
						<h1 className="font-bold">Pomoč v gospodinjstvu</h1>
						<div className="flex justify-between w-full font-light">
							<p>Storitev</p>
							<span className="font-bold">17€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">04</small>
						<h1 className="font-bold">Fizioterapija na domu</h1>
						<div className="flex justify-between w-full font-light">
							<p>Storitev</p>
							<span className="font-bold">35€-45€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">05</small>
						<h1 className="font-bold">
							Medicinska pedikura na domu
						</h1>
						<div className="flex justify-between w-full font-light">
							<p>Storitev</p>
							<span className="font-bold">45€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">06</small>
						<h1 className="font-bold">Masaža in vadba na domu</h1>
						<div className="flex justify-between w-full font-light">
							<p>Masaža</p>
							<span className="font-bold">50€</span>
						</div>
						<div className="flex justify-between w-full font-light">
							<p>Vadba za starejše</p>
							<span className="font-bold">35€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">07</small>
						<h1 className="font-bold">Manikura na domu</h1>
						<div className="flex justify-between w-full font-light">
							<p>Storitev</p>
							<span className="font-bold">20€</span>
						</div>
					</div>
					<div className="flex flex-col p-3 pl-0">
						<small className="text-blue">08</small>
						<h1 className="font-bold">Frizerske storitve</h1>
						<div className="flex justify-between w-full font-light">
							<p>Storitev</p>
							<span className="font-bold">25€-60€</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
