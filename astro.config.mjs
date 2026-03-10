import { defineConfig } from 'astro/config';

// https://astro.build/config
// TODO: Replace 'YOUR_USERNAME' with your GitHub username
export default defineConfig({
  site: 'https://wiscprivacy.com',
  base: '/new_wipi_website_2/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});


