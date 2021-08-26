import { makeStyles } from "@material-ui/core";
import React from "react";
import Logo from "../logo.svg";
import { ReactSVG } from 'react-svg'

const style = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    width: "10%",
    position: "absolute",
  },
}));

const Loader = () => {
  const classes = style();
  return (
    <div className={classes.root}>
      <img src={Logo} className="App-logo" alt="loader"></img>
    </div>
  );
};
export default Loader;
