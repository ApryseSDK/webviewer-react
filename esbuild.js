const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outdir: 'lib',
    bundle: true,
    sourcemap: false,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['es6'],
    external:['react','@pdftron/webviewer']
  })
  .catch(() => process.exit(1));
