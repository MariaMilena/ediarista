import '@styles/globals.css'; // @styles = apelido definido no arquivo tsconfig para não precisar colocar todo o caminho da pasta
import { ThemeProvider } from '@material-ui/core';
import theme from 'ui/themes/theme';
import Head from 'next/head';
import Header from 'ui/components/surfaces/Header/Header';

function MyApp({ Component, pageProps }) {
  return(   // <> 'React Fragment'
    <> 
      <head>
        <title>e-diarista</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
      </head>
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ); // <Component {...pageProps} />  Componente da nossa página
}

export default MyApp;
