import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	base: "./", // IMPORTANT for Github Pages because it looks at the base of your pages (e.g., https://username.github.io/) to find stuff from index.html.
	plugins: [tailwindcss(), reactRouter()],
	optimizeDeps: {
		// Prevent Vite's dep optimizer from treating our app route modules as external deps.
		// Some environments (Codespaces/remote) can cause the optimizer to rewrite
		// imports like `app/routes/home.tsx` into node_modules/.vite/deps which 404s.
		exclude: [
			"app/routes/home.tsx",
			"./app/routes/home.tsx",
			"app/routes/settings.tsx",
			"./app/routes/settings.tsx",
		],
	},
	resolve: {
		tsconfigPaths: true,
	},
});
