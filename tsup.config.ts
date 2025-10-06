import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['cjs'],  // ou 'esm' dependendo do seu projeto
  outDir: 'dist',
  clean: true,
  bundle: false,
  external: [], // se quiser excluir dependências
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.json': 'copy', // <--- mantém JSON sem transpilar
    }
  },
})