export default {
  base: '/OnePageFormulaAPI/', // Ajusta según tu repositorio
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  },
}
