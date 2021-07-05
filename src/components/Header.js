import React from 'react';
import {useHistory} from "react-router-dom";
import PATH from "../constants/RoutesPath";
import {Breadcrumbs, Link, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 21,
    cursor: 'pointer'
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const setPrimary = (pathName) => {
    if (history.location.pathname === pathName) {
      return "textPrimary";
    }
    return "inherit";
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        className={classes.link}
        color={setPrimary(PATH.HOME)}
        onClick={() => history.push(PATH.HOME)}
      >
        Home
      </Link>
      <Link
        className={classes.link}
        color={setPrimary(PATH.HISTORY)}
        onClick={() => history.push(PATH.HISTORY)}
      >
        History
      </Link>
    </Breadcrumbs>
  )
}

export default Header;