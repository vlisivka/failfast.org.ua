/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: "/",
    public: "/public",
    posts: "/posts",
  },
  plugins: [
    '@snowpack/plugin-svelte',
    ["snowpack-plugin-mdsvex", { /* see "Plugin Options" below */ }],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "./docs",
  },
};
