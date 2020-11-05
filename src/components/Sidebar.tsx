import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

import { AddRounded, SettingsRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      marginTop: 60,
    },
    sidebarItemText: {},
  })
);

const Sidebar: React.FC<any> = (props) => {
  const classes = useStyle();
  const history = useHistory();
  const drawerList = [
    {
      text: "الرئيسية",
      icon: <AddRounded fontSize="small" />,
      style: "",
      link: "/",
    },
    {
      text: "إضافة ملف جديد",
      icon: <AddRounded fontSize="small" />,
      style: "",
      link: "/add",
    },
    {
      text: "الإعدادات",
      icon: <SettingsRounded fontSize="small" />,
      style: "flex-end",
      link: "/settings",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      style={{
        maxHeight: 600,
      }}
    >
      <List>
        {drawerList.map(({ text, icon, style, link }, index) => (
          <ListItem
            key={index}
            button
            onClick={() => history.push(link)}
            style={{
              alignSelf: style,
            }}
          >
            <ListItemText primary={text} className={classes.sidebarItemText} />
            <ListItemIcon>{icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
