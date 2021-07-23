import React, { useState } from "react";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SubHeader from "../components/SubHeader";
import Box from "@material-ui/core/Box";
import ImageCpnt from "../components/ImageCpnt";
import Form from "../components/From";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import Snackbars from "../components/SnackBar";
import Container from "@material-ui/core/Container";
import { createClient } from "contentful";

const useStyles = makeStyles((theme) => ({
  container: {
    background: color.black,
    minWidth: "100vw",
    minHeight: "100vh",
  },

  subContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  spacer: {
    margin: "3%",
  },
  spacer2: {
    margin: "8%",
  },
  spacer3: {
    margin: "2%",
  },
  call: {
    color: color.white,
    // marginRight: "auto",
    padding: "10px 20px",
  },

  test: {
    margin: 5,
  },
}));

export async function getStaticProps() {
  const client = createClient({
    space: "822gsnozbtys",
    accessToken: "Q8TN4lOQ_s-jgscPjrCTpCX6SYTABc42QsIcWKZmZog",
  });

  const res = await client.getEntries({ content_type: "teckstack" });
  return {
    props: {
      teckstack: res.items,
    },
  };
}

const TechStack = ({teckstack}) => {
  const classes = useStyles();
  const teckStackArr = []

teckstack.map((item) => {
    teckStackArr.push(item.fields.techimage.fields.file.url);
  });
  
return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
    <Box className={classes.spacer} />
      <SubHeader text={"Skills"} colorgreen />
      <Box className={classes.spacer3} />
      <Container className={classes.subContainer}>
        {teckStackArr && teckStackArr.map((item ,index) => {
          return <ImageCpnt photo={item}  key={index}/>;
        })}
      </Container>
      <Box className={classes.spacer} />
    </Grid>
  );
};

export default TechStack;
