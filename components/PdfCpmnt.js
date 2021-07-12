import React from 'react'
import color from "../components/color";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image"
import Link  from  "next/link"


const useStyles = makeStyles((theme) => ({
  pdf:{
      width: "80%",
    height: "700px",
    background: color.white,
 
      
  },    
    spacer: {
    margin: "5%",
  },
//   spacer2: {
//     margin: "2%",
//   },
}));



const PdfCpmnt = ({src}) => {
      const classes = useStyles();
    return (
        <>
   
       {/* <a target={src}  alt="resume"   className={classes.pdf}> */}

       <object  type="application/pdf" data={src}  className={classes.pdf}>
     
</object>
     
        
        </>
    )
}

export default PdfCpmnt
