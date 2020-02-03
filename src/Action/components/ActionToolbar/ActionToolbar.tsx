import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import PropTypes from "prop-types";

import ButtonComponent from "../../../Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1, 5)
  },
  margin: {
    margin: theme.spacing(0.5)
  }
}));

interface IProps {
  onConfirm;
  onCancel;
}

const ActionToolbar: FC<IProps> = ({ onConfirm, onCancel }) => {
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <div className={classes.root}>
        <ButtonComponent
          className={classes.margin}
          onClick={onCancel}
          size="small"
        >
          Cancel
        </ButtonComponent>
        <ButtonComponent
          className={classes.margin}
          color="primary"
          onClick={onConfirm}
          size="small"
          variant="contained"
        >
          Save
        </ButtonComponent>
      </div>
    </div>
  );
};

ActionToolbar.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default ActionToolbar;
