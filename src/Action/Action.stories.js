import React from "react";
import { makeStyles } from "@material-ui/styles";

import Action from "./Action";

const useStyles = makeStyles(theme => ({
  root: {
    width: 440
  }
}));

export default {
  title: "Action"
};

export const Default = () => {
  const classes = useStyles();

  return (
    <Action open title="My Action">
      <div className={classes.root}>Content</div>
    </Action>
  );
};
