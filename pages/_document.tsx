import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:locale" content="en_UK" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Emersa" />
          <meta
            property="og:description"
            content="Looking for a 22nd century platform where you get to keep your data? An awesome website built by Emersa."
          />
          <meta property="og:url" content="/" />
          <meta property="og:site_name" content="Emersa" />
          <meta property="article:modified_time" content="2023-03-08T20:43:29+00:00" />
          <meta property="og:image" content="/images/XDR_SocialCard1.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Emersa" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
