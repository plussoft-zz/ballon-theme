import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiTab: {
      // The default props to change
      disableRipple: true
    },
    MuiButtonBase: {
      // The default props to change
      disableRipple: true
    }
  }
});

export default theme;
