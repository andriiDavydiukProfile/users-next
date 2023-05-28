import React from 'react';
import { Provider } from 'react-redux';
import '../../../next_migration/my-app/pages/reset.css';
import Head from "next/head";
import { wrapper, store } from "@/store/store";


function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
  );
}


export default wrapper.withRedux(MyApp);