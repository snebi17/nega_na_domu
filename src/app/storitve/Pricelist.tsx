export default function Header() {
	return (
		<section className="w-full h-full bg-grey" id="cenik">
			<div className="container flex flex-col mx-auto align-center p-8 md:p-32">
				<div className="flex mb-4">
					<div className="hidden md:flex flex-grow bg-black my-auto h-1 mr-4"></div>
					<h1 className="text-3xl font-bold text-right">
						Cenik storitev
					</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
					<div className="flex flex-col items-center py-16 px-8 md:p-16 border border-white">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p className="text-xl font-bold">25€</p>
					</div>
					<div className="flex flex-col items-center py-16 px-8 md:p-16 border border-white">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p className="text-xl font-bold">50€</p>
					</div>
					<div className="flex flex-col items-center py-16 px-8 md:p-16 border border-white">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p className="text-xl font-bold">75€</p>
					</div>
					<div className="flex flex-col items-center py-16 px-8 md:p-16 border border-white">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p className="text-xl font-bold">100€</p>
					</div>
				</div>
			</div>
		</section>
	);
}
