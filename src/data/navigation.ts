export interface NavItem {
	label: string;
	href: string;
}

export const NAV_ITEMS: NavItem[] = [
	{ label: 'Strona główna', href: '/' },
	{ label: 'Usługi', href: '/usługi' },
	{ label: 'Kontakt', href: '/kontakt' },
];

/**
 * Normalizes pathnames so we can safely compare route strings.
 */
export const normalizePath = (value: string): string => {
	if (!value) {
		return '/';
	}

	const decoded = decodeURI(value);
	if (decoded !== '/' && decoded.endsWith('/')) {
		return decoded.slice(0, -1);
	}

	return decoded || '/';
};
