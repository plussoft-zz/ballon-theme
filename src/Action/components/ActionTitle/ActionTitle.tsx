import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: theme.spacing(1)
  },
  margin: {
    marginRight: theme.spacing(0.5)
  }
}));

interface IProps {
  title;
  onClose;
}

const ActionToolbar: FC<IProps> = ({ title, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={onClose}
          size="small"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>

        <Typography variant="button">{title}</Typography>
      </div>
      <Divider />
    </div>
  );
};

ActionToolbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

ActionToolbar.defaultProps = {
  title: "Title"
};

export default ActionToolbar;
