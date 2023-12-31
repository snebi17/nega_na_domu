import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.svg";

export default function Header() {
	return (
		<header className="w-screen h-16 md:h-20 lg:h-28 flex justify-around items-center fixed bg-opaqueWhite">
			<div className="flex items-center">
				<Image src={Logo} className="w-12 h-12" alt="Logo"></Image>
				<Link
					href="/"
					className="uppercase text-xl md:text-2xl lg:text-3xl cursor-pointer"
				>
					<strong>Srečna</strong> leta
				</Link>
			</div>
			<ul className="hidden md:flex uppercase text-xl lg:text-2xl">
				<li>
					<Link
						href="/#o-nas"
						className="hover:text-cream duration-200 ease-in-out active:text-beige"
					>
						O nas
					</Link>
				</li>
				<li>
					<Link
						href="/#mnenja"
						className="mx-4 hover:text-cream duration-200 ease-in-out active:text-beige"
					>
						Mnenja strank
					</Link>
				</li>
				<li>
					<Link
						href="/#lokacija"
						className="hover:text-cream duration-200 ease-in-out active:text-beige"
					>
						Lokacija
					</Link>
				</li>
				<li>
					<Link
						href="/#kontakt"
						className="ml-4 mr-8 hover:text-cream duration-200 ease-in-out active:text-beige"
					>
						Kontakt
					</Link>
				</li>
				<li>
					<Link
						href="/storitve"
						className="hover:text-cream duration-200 ease-in-out font-bold active:text-beige"
					>
						Cenik
					</Link>
				</li>
			</ul>
			<div className="flex md:hidden uppercase text-md">
				<Link
					href="/storitve"
					className="hover:text-cream duration-200 ease-in-out font-bold active:text-beige"
				>
					Cenik
				</Link>
			</div>
		</header>
	);
}
