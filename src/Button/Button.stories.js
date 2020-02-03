import React, { Fragment } from "react";
import Button from "./Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default {
  title: "Button"
};

export const Default = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Button size="small" className={classes.margin}>
        Small button
      </Button>
      <Button size="medium" className={classes.margin}>
        Medium button
      </Button>
      <Button size="large" className={classes.margin}>
        Large button
      </Button>
    </Fragment>
  );
};

export const Outlined = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Button size="small" variant="outlined" className={classes.margin}>
        Small button
      </Button>
      <Button size="medium" variant="outlined" className={classes.margin}>
        Medium button
      </Button>
      <Button size="large" variant="outlined" className={classes.margin}>
        Large button
      </Button>
    </Fragment>
  );
};

export const Contained = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Button
        color="primary"
        size="small"
        variant="contained"
        className={classes.margin}
      >
        Small button
      </Button>
      <Button
        color="primary"
        size="medium"
        variant="contained"
        className={classes.margin}
      >
        Medium button
      </Button>
      <Button
        color="primary"
        size="large"
        variant="contained"
        className={classes.margin}
      >
        Large button
      </Button>
    </Fragment>
  );
};
