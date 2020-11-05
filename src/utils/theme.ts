import React from "react";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import { purple, deepPurple, indigo, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    type: "light",
    primary: {
      dark: indigo["800"],
      main: indigo["500"],
      light: indigo["200"],
      contrastText: grey["900"],
    },
    secondary: deepPurple,
    // background: {
    //   paper: "#212529",
    // },
  },
  typography: {
    fontFamily: ["Almarai", "Arial", "sans-serif"].join(","),
  },
  props: {
    MuiAppBar: {
      elevation: 0,
    },
  },
  overrides: {
    MuiDrawer: {
      root: {
        border: "none",
      },
      paperAnchorDockedRight: {
        borderLeft: "none",
        backgroundColor: "rgba(0,0,0,0.03)",
        borderRadius: 8,
        height: 600,
        marginRight: 16,
      },
      paperAnchorRight: {
        marginTop: 60,
        width: 195,
        border: "0",
      },
    },
    MuiListItemText: {
      root: {
        textAlign: "left",
        marginRight: 0,
        marginLeft: 25,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0,
      },
    },
    // MuiSelect: {
    //   root: {
    //     "& label": {
    //       color: "#f8f9fa",
    //       opacity: 0.7,
    //     },
    //   },
    //   icon: {
    //     fill: "#fff",
    //   },
    // },
    // MuiTextField: {
    //   root: {
    //     "& .MuiInputBase-root": {
    //       color: "#f8f9fa",
    //     },
    //     "& label": {
    //       color: "#f8f9fa",
    //       opacity: 0.7,
    //     },
    //     "& label.Mui-focused": {
    //       color: "#f8f9fa",
    //       opacity: 1,
    //     },

    //     "& .MuiOutlinedInput-root": {
    //       "& fieldset": {
    //         borderColor: "#f8f9fa",
    //         opacity: 0.7,
    //       },
    //       "&:hover fieldset": {
    //         borderColor: "#f8f9fa",
    //         opacity: 0.9,
    //       },
    //       "&.Mui-focused fieldset": {
    //         borderColor: "#f8f9fa",
    //         opacity: 1,
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
