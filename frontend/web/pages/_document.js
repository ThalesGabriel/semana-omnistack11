import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components';

class BeTheHero extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,700i&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>

      </html>
    );
  }
}

BeTheHero.getInitialProps = async ctx => {
  
  const sheets = new ServerStyleSheets();
  const sheetsStyled = new StyledServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => {
        sheetsStyled.collectStyles(<App {...props} />);
        sheets.collect(<App {...props} />);
        return null;
      },
    });

  const initialProps = await Document.getInitialProps(ctx);

  //styled components
  const styleTags = sheetsStyled.getStyleElement();
  sheetsStyled.seal();

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
        styleTags
    ],
  };
}

export default BeTheHero;

