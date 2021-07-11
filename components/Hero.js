import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "./Header";
import ButtonCpmnt from "./ButtonCpmnt";
import color from "./color";
import { useRouter } from "next/router";


const useStyles = makeStyles((theme) => ({
  Heroimg: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: color.black,
    minHeight: "100vh",
    minWidth: "100vw",
    
    },
  title: {
    color: color.green,
  },
  spacer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "5%",
    },
  },
}));

const HeromoImage = () => {
  const classes = useStyles();
  const router = useRouter();

  const ClickHandler = () => {
    router.push("/Projects");
  };
  return (
    <Container className={classes.Heroimg} maxWidth="xl">
      <Header
        text={"Frontend Developer"}
        className={classes.title}
        colorgreen
      />
      <Header text={`${"Hi I'm Amin Titi. I build user interfaces"}`} />
      <Box className={classes.spacer} />

      <ButtonCpmnt text={"Projects"} clickHandler={ClickHandler} />
    </Container>
  );
};

export default HeromoImage;
