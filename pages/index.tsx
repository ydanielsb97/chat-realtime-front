import Head from 'next/head'
import Image from 'next/image'
import MenuAppBar from "../components/MenuAppBar";
import ChatBox from "../components/ChatBox";
import Container from "@material-ui/core/Container"
import { Box } from '@material-ui/core';
export default function Home() {
  return (
    <>

      <MenuAppBar />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      </Head>


      <Box>
        <ChatBox />
          
        </Box>

    </>
   
  )
}
