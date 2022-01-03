/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    sourcemap: false,
    minify: false,
    splitting: true,
    format: 'esm',
    target: ['es6'],
    external: ['react', '@pdftron/webviewer'],
    plugins: [cssModulesPlugin()]
  })
  .catch(() => process.exit(1));
