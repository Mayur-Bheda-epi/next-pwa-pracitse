import Head from 'next/head'
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from '../store';
import Layout from '../component/Layout/Layout';

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
//         />
//         <meta name="description" content="Description" />
//         <meta name="keywords" content="Keywords" />
//         <title>Next.js PWA Example</title>

//         <link rel="manifest" href="/manifest.json" />
//         <link
//           href="/favicon-16x16.png"
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//         />
//         <link
//           href="/favicon-32x32.png"
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//         />
//         <link rel="apple-touch-icon" href="/apple-icon.png"></link>
//         <meta name="theme-color" content="#317EFB" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
