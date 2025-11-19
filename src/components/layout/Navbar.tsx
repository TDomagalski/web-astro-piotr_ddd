import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface NavbarProps {
	menuIcon: ReactNode;
	closeIcon: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ menuIcon, closeIcon }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState('');

	// Update currentPath on mount (client-side) to highlight active link
	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	// Close mobile menu if window is resized to desktop size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Toggle mobile menu open/close
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	// Define navigation links (href and label)
	const NAV_ITEMS: { href: string; label: string }[] = [
		{ href: '/', label: 'Home' },
		{ href: '/usługi', label: 'Usługi' },
		{ href: '/kontakt', label: 'Kontakt' },
		// Add more nav items as needed
	];

	return (
		<nav className="border-b border-gray-200 bg-white px-4 py-3">
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				{/* Brand/Logo */}
				<div className="text-2xl font-bold">Brand</div>

				{/* Desktop Menu */}
				<div className="hidden space-x-6 md:flex">
					{NAV_ITEMS.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className={`text-gray-800 transition-colors hover:text-blue-600 ${currentPath === item.href ? 'font-semibold text-blue-600' : ''}`}
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Hamburger Button (mobile) */}
				<button
					onClick={toggleMenu}
					className="flex text-gray-800 focus:outline-none md:hidden"
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
				>
					{menuIcon}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-all duration-300 md:hidden ${
					isMenuOpen
						? 'pointer-events-auto opacity-100'
						: 'pointer-events-none opacity-0'
				}`}
			>
				{/* Close button */}
				<button
					onClick={toggleMenu}
					className="absolute top-4 right-4 text-gray-800 focus:outline-none"
					aria-label="Close menu"
				>
					{closeIcon}
				</button>

				{/* Mobile menu links */}
				{NAV_ITEMS.map((item) => (
					<a
						key={item.href}
						href={item.href}
						onClick={() => setIsMenuOpen(false)}
						className={`py-2 text-2xl text-gray-800 transition-colors hover:text-blue-600 ${currentPath === item.href ? 'font-semibold text-blue-600' : ''}`}
					>
						{item.label}
					</a>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
