import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true
    }
  }
});
