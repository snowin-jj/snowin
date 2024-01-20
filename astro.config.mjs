import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import icon from 'astro-icon';

/** @type {import('astro').AstroConfig} */
const astroConfig = {
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: netlify(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
};

export default defineConfig(astroConfig);
