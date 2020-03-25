import "../css/Header.css";

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link } from "react-router-dom";

import statisticIcon from "../pictures/icons/statisticIcon.svg";
import Logo from "../pictures/logo.svg";
import Colors from "../utils/Colors";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1, witdh: "100%" },
  backColor: { backgroundColor: Colors.mainYellow, marginBottom: "5px" },

  menuButton: { marginRight: theme.spacing(2) },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("xs")]: { display: "block" }
  },
  statisticButtonClicked: {}
}));

export default function Header({ clickStats }) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.backColor}>
      <div className={classes.root + "header-effect"}>
        <div className="button-statitics">
          <svg onClick={() => clickStats()}>
            <image className="navbarIcon" xlinkHref={statisticIcon}></image>
          </svg>
        </div>
      </div>
      <Toolbar variant="dense">
        <div className={classes.title}>
          <Link exact="true" to="/home">
            <img src={Logo} alt="logo" className="header-logo" />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
