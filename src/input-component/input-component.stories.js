import React, { Fragment } from "react";
import InputComponent from "./input-component";
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
      <InputComponent size="small" className={classes.margin} />
      <InputComponent size="medium" className={classes.margin} />
    </Fragment>
  );
};

export const Filled = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <InputComponent
        variant="filled"
        size="small"
        className={classes.margin}
      />

      <InputComponent
        variant="filled"
        size="medium"
        className={classes.margin}
      />
    </Fragment>
  );
};

export const Outlined = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <InputComponent
        variant="outlined"
        size="small"
        className={classes.margin}
      />

      <InputComponent
        variant="outlined"
        size="medium"
        className={classes.margin}
      />
    </Fragment>
  );
};
