import React, { useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  makeStyles,
  Avatar,
  Grid,
} from "@material-ui/core";
import { CloseRounded, RemoveRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  avatar: {
    backgroundColor: "#fff",
    color: "#000",
  },
  warpIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
}));

const Titlebar: React.FC<{}> = (props) => {
  const classes = useStyles();

  const closeWindow = () => window.ipcr.send("close-window-off");
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          height: 60,
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar className="drag-window">
          <Grid
            container
            justify="flex-start"
            alignContent="flex-start"
            spacing={2}
            style={{ alignSelf: "start", paddingTop: 8 }}
          >
            <Grid item>
              <IconButton
                style={{ width: 25, height: 25 }}
                onClick={closeWindow}
                className="undrag-window"
                color="inherit"
              >
                <CloseRounded style={{ fontSize: 20 }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className="undrag-window"
                color="inherit"
                style={{ width: 25, height: 25 }}
              >
                <RemoveRounded style={{ fontSize: 20 }} />
              </IconButton>
            </Grid>
          </Grid>

          <Grid
            container
            justify="flex-end"
            alignItems="center"
            alignContent="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="caption">Salehjarad</Typography>
            </Grid>
            <Grid item>
              <Avatar
                style={{ width: 25, height: 25 }}
                src="https://cdn.dribbble.com/users/5047705/screenshots/10955695/media/20f48f3992374e5715b6a2263a3b4f0c.png"
                className={classes.avatar}
              >
                R
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="button" className={classes.title}>
                إدارة الشئون الهندسية - مركز البيانات
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Titlebar;
