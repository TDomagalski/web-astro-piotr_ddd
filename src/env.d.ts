/// <reference types="astro/client" />

/**
 * Deklaracje TypeScript dla zmiennych środowiskowych.
 * Ten interfejs opisuje, jakie zmienne możesz bezpiecznie odczytywać z `import.meta.env`.
 *
 * Uwaga:
 * - Wszystkie klucze zaczynające się od `PUBLIC_` są dostępne po stronie klienta (przeglądarka).
 * - Pozostałe są widoczne tylko po stronie serwera / podczas builda.
 */
interface ImportMetaEnv {
	/**
	 * Publiczny URL Twojej strony, np. "https://twoja-domena.pl"
	 * Świetne do SEO: canonical URL, og:url, sitemap itp.
	 */
	readonly PUBLIC_SITE_URL: string;

	/**
	 * Domyślny tytuł strony – możesz używać w generatorze meta tagów.
	 */
	readonly PUBLIC_SITE_TITLE: string;

	/**
	 * Domyślny opis strony – przydatne do meta description.
	 */
	readonly PUBLIC_SITE_DESCRIPTION: string;
}

/**
 * Interfejs dla samego obiektu `import.meta`.
 * TypeScript dzięki temu wie, że `import.meta.env` ma typ `ImportMetaEnv`.
 */
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
