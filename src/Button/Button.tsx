import React, { FC } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button as MDButton } from "@material-ui/core";

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
})(MDButton);

interface IProps {}

const Button: FC<IProps> = props => {
  return <CustomButton {...props} />;
};

export default Button;
