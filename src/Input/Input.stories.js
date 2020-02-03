import React, { Fragment } from "react";
import Input from "./Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default {
  title: "Input"
};

export const Default = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Input size="small" className={classes.margin} />
      <Input size="medium" className={classes.margin} />
    </Fragment>
  );
};

export const Filled = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Input variant="filled" size="small" className={classes.margin} />

      <Input variant="filled" size="medium" className={classes.margin} />
    </Fragment>
  );
};

export const Outlined = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Input variant="outlined" size="small" className={classes.margin} />

      <Input variant="outlined" size="medium" className={classes.margin} />
    </Fragment>
  );
};
