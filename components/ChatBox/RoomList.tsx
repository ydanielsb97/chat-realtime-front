import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { useFindAllRoomsQuery } from "../../src/generated/graphql";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxHeight: "69vh",
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      flexGrow: 1,
      padding: "10px 0 10px 14px",
      backgroundColor: "#556cd6",
      color: "white",
      boxShadow: "0px 1px 6px 1px #ccc",
    },
  })
);
// const [ findAllRoomsQuery, { error }] = useFindAllRooms();

export default function RoomList() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const {data, error, loading} = useFindAllRoomsQuery()
  
  console.log(data)
  console.log(error)
  
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Rooms
      </Typography>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">

        {data && data.findAllRooms.map((room: any, i: number) => (
            <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, i)}
            key={i}
          >
            <ListItemText primary={room.name} />
          </ListItem>
          ))
        }

        {error && <span>Error</span>}
        </List>
    </div>
  );
}
