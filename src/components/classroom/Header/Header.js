import {AppBar,  Avatar,  Menu,  MenuItem,  Toolbar,  Typography,} from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons";
import React from "react";
import { CreateClass, JoinClass } from "..";
import { useLocalContext } from "../../../context/classroom/context";
import { useStyles } from "./style";
import {Link} from 'react-router-dom'

const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const {
    setCreateClassDialog,
    setJoinClassDialog,
    loggedInUser,
    logout,
  } = useLocalContext();

  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };

  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <Link to = '/classroom' style={{ textDecoration: 'none' }}>
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
            </Link>
          </div>
          <div className={classes.header__wrapper__right}>
          <Add onClick={handleClick} className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Join Class</MenuItem>
              <MenuItem onClick={handleCreate}>Create Class</MenuItem>
            </Menu>
            
              <Avatar
                onClick={() => logout()}
                src={loggedInUser?.photoURL}
                className={classes.icon}
                style = {{marginLeft:'50%'}}
              />
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;
