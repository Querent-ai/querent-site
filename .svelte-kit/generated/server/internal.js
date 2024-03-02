
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <base href=\"./\" />\n    <meta charset=\"utf-8\" />\n    <title>Querent AI</title>\n    <link rel=\"icon\" href=\"" + assets + "/favicon.ico\" sizes=\"any\" />\n    <link rel=\"icon\" href=\"" + assets + "/querentMainLogo.svg\" type=\"image/svg+xml\" />\n    <link rel=\"apple-touch-icon\" href=\"" + assets + "/touchlogo.png\" />\n    <link rel=\"manifest\" href=\"" + assets + "/manifest.webmanifest\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n    <meta property=\"og:title\" content=\"Querent AI\" />\n    <meta property=\"og:url\" content=\"\" />\n    <meta\n      property=\"og:description\"\n      content=\"Frequency fuels the Social Web, putting control & data privacy in your hands.\"\n    />\n    <!-- The og:images must be absolute. The assets are in /static -->\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:image\" content=\"https://www.querent.xyz/1.png\" />\n    <meta property=\"og:image:width\" content=\"1200\" />\n    <meta property=\"og:image:height\" content=\"630\" />\n    <meta property=\"og:image\" content=\"https://www.querent.xyz/og-square.png\" />\n    <meta property=\"og:image:width\" content=\"1200\" />\n    <meta property=\"og:image:height\" content=\"1200\" />\n    <meta property=\"og:image\" content=\"https://www.querent.xyz/og-thumbnail.png\" />\n    <meta property=\"og:image:width\" content=\"200\" />\n    <meta property=\"og:image:height\" content=\"200\" />\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:image\" content=\"https://www.querent.xyz/og-twitter.png\" />\n\n    <meta name=\"twitter:site\" content=\"@querent_ai\" />\n    <meta property=\"og:site_name\" content=\"Querent AI\" />\n    " + head + "\n\n    <!-- Klaro - make sure the config gets loaded before Klaro -->\n    <script defer type=\"text/javascript\" src=\"klaro-config.js\"></script>\n    <script defer type=\"text/javascript\" src=\"klaro.js\"></script>\n    <!-- Matomo -->\n    <script>\n      var _paq = (window._paq = window._paq || []);\n      /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n      _paq.push(['requireCookieConsent']);\n      _paq.push(['requireConsent']);\n      _paq.push(['trackPageView']);\n      _paq.push(['enableLinkTracking']);\n      (function () {\n        var u = 'https://dsnp.matomo.cloud/';\n        _paq.push(['setTrackerUrl', u + 'matomo.php']);\n        _paq.push(['setSiteId', '2']);\n        var d = document,\n          g = d.createElement('script'),\n          s = d.getElementsByTagName('script')[0];\n        g.async = true;\n        g.src = 'https://cdn.matomo.cloud/dsnp.matomo.cloud/matomo.js';\n        s.parentNode.insertBefore(g, s);\n      })();\n    </script>\n    <!-- End Matomo Code -->\n  </head>\n\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "ny3sj4"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
