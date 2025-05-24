// pages/_app.js
import '../styles/globals.css' // Mantenha esta linha se tiver um ficheiro de estilos globais

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;