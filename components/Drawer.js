import React from "react";

import { Drawer as MUIDrawer, List } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import MailIcon from "@material-ui/icons/Mail";

import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactsIcon from "@material-ui/icons/Contacts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import Link from "next/link";
import color from "./color";
import { CallMissedSharp } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  list: {
    background: `${color.black}`,
    minHeight: "100vh",
    display: "flex",

    flexDirection: "column",
    justifyContent: "space-around",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    color: `${color.white}`,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    color: `${color.white}`,
  },
  closewrp: {
    marginLeft: "auto",
    color: `${color.green}`,
    padding: "0px 20px",
  },
  close: {
    fontSize: "30px",
  },
});

export default function Drawer({ openDrawer, setOpen }) {
  const classes = useStyles();
  const ItemList = [
    {
      text: (
        <Link href="/">
          <Typography variant="h6">Home</Typography>
        </Link>
      ),
    },
    // {
    //   text: (
    //     <Link href="/Projects">
    //       <Typography variant="h6">Projects</Typography>
    //     </Link>
    //   ),
    // },
    {
      text: (
        <Link href="/About">
          <Typography variant="h6">About</Typography>
        </Link>
      ),
    },
    {
      text: (
        <Link href="/Contact">
          <Typography variant="h6">Contact</Typography>
        </Link>
      ),
    },
    {
      text: (
        <Link href="/TechStack" className={classes.link}>
          <Typography variant="h6">Tech-Stack</Typography>
        </Link>
      ),
    },
  ];

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <MUIDrawer open={openDrawer} anchor={"top"} className={classes.drawer}>
        <List className={classes.list}>
          <IconButton className={classes.closewrp} onClick={closeModal}>
            <HighlightOffIcon className={classes.close} />
          </IconButton>
          {ItemList.map((item, index) => {
            const { text } = item;
            return (
              <ListItem button key={index}>
                <ListItemText
                  primary={text}
                  className={classes.links}
                  onClick={closeModal}
                />
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    </>
  );
}
