import '@styles/globals.css' // @styles = apelido definido no arquivo tsconfig para não precisar colocar todo o caminho da pasta

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
