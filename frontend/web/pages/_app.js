import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from "styled-components";
import parser from 'ua-parser-js';
import mediaQuery from 'css-mediaquery';

import { StylesProvider, ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

import { SnackbarProvider } from '../components/SnackbarProvider'
import { NavigationHistoryProvider } from '../components/NavigationHistoryProvider'
import theme from '../theme';
import { initStore } from '../redux';

//export default withRedux(initStore, { debug: true })(
  class BeTheHero extends App {

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles)
    }

    render() {
      const { Component, pageProps, store, ssrMatchMedia, router } = this.props;

      return (
        <React.Fragment>
          <Head>
            <title>Be The Hero</title>
          </Head>
          <Provider store={store}>
            <StylesProvider injectFirst>
              <MuiThemeProvider theme={
                { ...theme,
                  props: {
                    // Change the default options of useMediaQuery
                    MuiUseMediaQuery: { ssrMatchMedia },
                  }
                }
              }>
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <NavigationHistoryProvider router={router}>
                  <SnackbarProvider>
                    <Component {...pageProps} />
                  </SnackbarProvider>
                </NavigationHistoryProvider>
              </ThemeProvider>
              </MuiThemeProvider>
            </StylesProvider>
          </Provider>
        </React.Fragment>
      );
    }
  }

BeTheHero.getInitialProps = async ({ctx}) => {
  let ssrMatchMedia;
  {/*console.log('req');
  const deviceType = parser(ctx.req.headers['user-agent']).device.type || 'desktop';
  console.log(deviceType);
  ssrMatchMedia = query => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: deviceType === 'mobile' ? '0px' : '1024px',
    }),
  });*/}
  return {ssrMatchMedia: ssrMatchMedia? ssrMatchMedia : ""};
}

export default withRedux(initStore, { debug: true })(BeTheHero);

