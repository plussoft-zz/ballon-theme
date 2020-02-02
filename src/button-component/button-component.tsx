import React, { FC } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CustomButton = withStyles({
  root: {
    borderRadius: "0",
    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none"
    },
    "&:focus": {
      boxShadow: "none"
    }
  }
})(Button);

interface IProps {}

const ButtonComponent: FC<IProps> = props => {
  return <CustomButton {...props} />;
};

export default ButtonComponent;
