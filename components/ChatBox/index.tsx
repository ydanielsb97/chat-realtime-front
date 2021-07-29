import { Box, Container, createStyles, makeStyles, Tab, Tabs, Theme } from '@material-ui/core'
import React from 'react'
import LeftColumn from './LeftColumn';
import RoomList from "./RoomList"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "grid",
      gridTemplateColumns: "30% 70%",
      width: "80vw",
      height: "70vh",
      margin: "auto",
      border: "1px solid #ccc",
      marginTop: "10vh"
    }
  }),
);
const ChatBox = () => {

  const classes = useStyles();
    function a11yProps(index: any) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }
      
    return (
        <Box className={classes.box}>
            <RoomList />
            <LeftColumn />
        </Box>
    )
}

export default ChatBox
