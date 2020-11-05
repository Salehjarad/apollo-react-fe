import React from "react";
import "./App.css";
import { create } from "jss";
import rtl from "jss-rtl";

import {
  ThemeProvider,
  StylesProvider,
  Grid,
  jssPreset,
  makeStyles,
  Paper,
  createStyles,
  Theme,
  Container,
} from "@material-ui/core";

import theme from "./utils/theme";
import Apollo from "./Providers/apollo";

import Titlebar from "./components/Titlebar";
// import Document from "./components/addDocument";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// for routes
import Form from "./components/from/Form";
import Home from "./components/Home";
import Settings from "./components/Settings";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: `calc(100% - 240px)`,
      marginTop: 62,
      padding: theme.spacing(2),
      backgroundColor: "rgba(0,0,0,0.03)",
      borderRadius: 8,
      marginRight: 14,
      marginLeft: 14,
    },
    content: {
      flexGrow: 1,
      width: `100%`,
      height: "100vh",
      overflow: "auto",
    },
  })
);

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Apollo>
          <Router>
            <Paper elevation={0}>
              <Titlebar />
              <Sidebar />
              <Container maxWidth="lg" className={classes.content}>
                <Grid container className={classes.root}>
                  <Grid item xs={12}>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/settings" component={Settings} />
                      <Route path="/add" component={Form} />
                    </Switch>
                  </Grid>
                </Grid>
                <Footer />
              </Container>
            </Paper>
          </Router>
        </Apollo>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
