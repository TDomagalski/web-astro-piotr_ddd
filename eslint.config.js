import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

/** @type {import("eslint").FlatConfig.ConfigArray} */
export default [
	// Bazowa konfiguracja ESLinta
	eslint.configs.recommended,

	// TypeScript – plugin + rekomendacje
	...tseslint.configs.recommended,

	// Astro – plugin + rekomendacje
	...astro.configs.recommended,

	// JSX A11Y (dostępność)
	{
		plugins: { 'jsx-a11y': jsxA11y },
		rules:
			jsxA11y.configs.strict && jsxA11y.configs.strict.rules
				? jsxA11y.configs.strict.rules
				: {},
	},

	// Prettier (wyłącza reguły kolidujące ze stylem formatowania)
	prettier,

	// Konfiguracja globalna parsera i opcji
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				ecmaVersion: 2023,
				sourceType: 'module',
				project: './tsconfig.json',
			},
		},
	},

	// Specjalne ustawienia dla plików .astro
	{
		files: ['**/*.astro'],
		processor: astro.processors.astro,
		languageOptions: {
			parser: astro.parser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.astro'],
			},
		},
		rules: {
			// Możesz włączyć dodatkowe reguły Astro np.:
			// "astro/no-set-html-directive": "error",
		},
	},
];
