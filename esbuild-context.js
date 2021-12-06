const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['src/context/index.ts'],
    outdir: 'lib/context',
    bundle: true,
    sourcemap: false,
    minify: false,
    splitting: false,
    format: 'esm',
    target: ['esnext'],
  })
  .catch(() => process.exit(1))
