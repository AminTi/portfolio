import React from "react";
import color from "../components/color";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  pdf: {
    width: "60%",
    minHeight: "500px",
    background: color.white,
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      minHeight: "400px",
    },
  },
  spacer: {
    margin: "5%",
  },
  //   spacer2: {
  //     margin: "2%",
  //   },
}));

const PdfCpmnt = ({ src }) => {
  const classes = useStyles();
  return (
    <>
      <object
        type="application/pdf"
        data={src}
        className={classes.pdf}
      ></object>
    </>
  );
};

export default PdfCpmnt;
