import type { FC } from 'react';
import { useState } from 'react';

// TypeScript: definiujemy strukturę pojedynczego linka nawigacyjnego
interface NavLink {
	label: string;
	href: string;
}

// TypeScript: typ propsów przyjmowanych przez komponent
interface NavbarProps {
	currentPath: string;
}

const navLinks: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Usługi', href: '/uslugi' },
	{ label: 'Kontakt', href: '/kontakt' },
];

const Navbar: FC<NavbarProps> = ({ currentPath }) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<nav
			className="sticky top-0 z-10 bg-white shadow-md"
			role="navigation"
			aria-label="Główna nawigacja"
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between p-4">
				<a href="/" className="text-xl font-bold text-black">
					Moja Strona jest super
				</a>

				{/* Hamburger menu (tylko na mobile) */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="p-2 text-black focus:outline-none md:hidden"
					aria-label="Toggle Menu"
					aria-expanded={menuOpen}
					aria-controls="nav-links"
				>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				{/* Nawigacja */}
				<ul
					id="nav-links"
					className={`${
						menuOpen ? 'block' : 'hidden'
					} absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:justify-end md:space-x-6`}
				>
					{navLinks.map((link) => (
						<li key={link.href} className="border-b md:border-none">
							<a
								href={link.href}
								className={`block w-full px-4 py-2 hover:bg-gray-100 md:inline-block md:w-auto md:p-0 md:hover:bg-transparent ${
									currentPath === link.href
										? 'font-semibold text-blue-600'
										: 'text-gray-800'
								}`}
								aria-current={currentPath === link.href ? 'page' : undefined}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
