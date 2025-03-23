import React, { useState } from "react";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SubHeader from "../components/SubHeader";
import Box from "@material-ui/core/Box";
import Form from "../components/From";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import Snackbars from "../components/SnackBar";
import PdfCpmnt from "../components/PdfCpmnt"
import ButtonCpmnt from "../components/ButtonCpmnt"
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
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
}));

const Resume = () => {
  const classes = useStyles();

  const pdfHandler = (e)=>{
 e.preventDefault()
 window.open("/aminnewcv.pdf");
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
     <Box className={classes.spacer}/>
     <SubHeader text={"CV"} colorgreen/>
     <Box className={classes.spacer2}/>
     <PdfCpmnt src="/aminnewcv.pdf"/>
  
     <ButtonCpmnt  text={'Download'} download  clickHandler={pdfHandler}/>

       <Box className={classes.spacer2}/>
    
      
 </Grid>
  );
};

export default Resume;
