import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import PropsTypes from "prop-types";

import ActionToolbar from "./components/ActionToolbar";
import ActionTitle from "./components/ActionTitle";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    height: "100%",
    margin: theme.spacing(1)
  }
}));

interface IProps {
  open;
  onClose;
  title;
}

const Action: FC<IProps> = ({ open, onClose, title, children }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" classes={{ paper: classes.root }} open={open}>
      <ActionTitle onClose={onClose} title={title} />
      <div className={classes.content}>{children}</div>
      <ActionToolbar onCancel={onClose} />
    </Drawer>
  );
};

Action.propTypes = {
  onClose: PropsTypes.func,
  open: PropsTypes.bool,
  title: PropsTypes.string
};

export default Action;
