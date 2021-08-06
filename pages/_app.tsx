import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import Router from "next/router"
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import theme from "../styles/theme";
import AuthContext from '../context/AuthContext';
import Container from "@material-ui/core/Container"
import { useEffect, useMemo, useState, useContext } from "react";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AuthI, TokenDecoded } from '../interface/Login.interface';
import { deleteToken, getToken, setToken } from '../helper/token.helper';
import AuthMiddleware from '../middlewares/Auth.middleware';
import { ApolloProvider } from '@apollo/client';
import * as Apollo from "@apollo/client";
import { authConfig } from "../graphql/config";
import RoomContextProvider from "../context/RoomContext";



const MyApp = ({ Component, pageProps }) => {

  const [auth, setAuth] = useState<AuthI>(undefined)

  useEffect(() => {
    const token = getToken();

    if (token) {
      const { uuid = "", userName = "" }: TokenDecoded = jwtDecode(token);
      setAuth((prev: AuthI) => ({ ...prev, token, uuid, userName }));

    } else {
      setAuth(null);
    }
  }, [])


  const login = (token: string) => {
    setToken(token)
    const { userName, uuid }: TokenDecoded = jwtDecode(token);
    setAuth((prev: any) => ({ ...prev, userName, uuid, token }))
    Router.push('/')
  }

  const logout = () => {
    deleteToken();
    setAuth(null)
    Router.push('/login')

  }

  const authData = useMemo(() => ({
    auth,
    login,
    logout,
    setReloadUser: () => null

  }), [auth])

  if (auth === undefined) return null;


  let client = new Apollo.ApolloClient(authConfig(getToken()));
  return (
    <AuthContext.Provider value={authData}>
      <RoomContextProvider>
      <AuthMiddleware>
        <ApolloProvider client={client}>
          <Head>
            <title>Chat - LPN</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name="description" content="Chat RealTime LPN" />
            <link rel="icon" href="/favicon.ico" />
            
            <meta charSet="utf-8" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <Component {...pageProps} />

          </ThemeProvider>
        </ApolloProvider>
      </AuthMiddleware>
      </RoomContextProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;