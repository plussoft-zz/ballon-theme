import React, { FC } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface IProps {}

const TextFieldCustom = withStyles({
  root: {
    [`& fieldset`]: {
      borderRadius: 0
    }
  }
})(TextField);

const Input: FC<IProps> = props => <TextFieldCustom {...props} />;

export default Input;
