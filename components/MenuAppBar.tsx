import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Grid } from '@material-ui/core';
import Link from "next/link"
import AuthContext from '../context/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { auth, logout } = useContext(AuthContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    logout();
  };


  return (
    <Grid container className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
 

          <Typography variant="h6" className={classes.title}>
              <Link href="/">
              <a>
              
            <ForumIcon />
          
    
            Chat RealTime
            </a>
            </Link>
          </Typography>

            <div>
              <Typography variant="overline">
                  {auth.userName}
              </Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>
    </Grid>
  );
}