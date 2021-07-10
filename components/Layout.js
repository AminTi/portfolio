import React from "react";
import Menu from "./Menu";
import BtmBar from "./BtmBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { minHeight } from "@material-ui/system";

const useStyles = makeStyles({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
  },
});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Menu />
      {children}
      <BtmBar />
    </div>
  );
}

export default Layout;
