import React from "react";
import Container from "@material-ui/core/Container";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import ImageCpnt from "../components/ImageCpnt";
import TextCpmnt from "../components/TextCpmnt";
import Box from "@material-ui/core/Box";
import axios from "axios";
import ButtonCpmnt from "../components/ButtonCpmnt";
import { useRouter } from "next/router";
import SubHeader from "../components/SubHeader";

const useStyles = makeStyles({
  container: {
    background: color.black,
    minWidth: "100vw",
    minHeight: "100vh",
  },
  spacer: {
    margin: "5%",
  },
  spacer2: {
    margin: "2%",
  },
});

const About = () => {
  const classes = useStyles();
  const router = useRouter();

  const ClickHandler = () => {
    router.push("Resume");
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      className={classes.container}
    >
      <Box className={classes.spacer2} />
      <Box className={classes.spacer2} />
      <SubHeader text={`${"  Amin Titi, Frontend-Developer"}`} colorgreen />
      <Box className={classes.spacer2} />
      {<ImageCpnt photo={"/amintiti.jpg"} />}

      <Box className={classes.spacer2} />

      <TextCpmnt
        text={`Social och självständig  frontend-utvecklare som gillar att dela med sig. Jag har ett gott öga för detaljer och en bra överblick för sammanhang och helhet. Jag eftersträvar alltid att ta till mig ny kunskap och som person är jag kreativ, hjälpsam, Analytisk ,driven och definitivt en lagspelare.`}
      />
      <ButtonCpmnt text="Resume" arrow clickHandler={ClickHandler} />

      <Box className={classes.spacer} />
      <Box className={classes.spacer2} />
    </Grid>
  );
};

export default About;
