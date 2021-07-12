import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import color from "./color";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
     margin: "1%",
    borderRadius: "10px",
   [theme.breakpoints.down("sm")]: {
      minWidth: 250,
    },
  },
  media: {
    padding: "56%", // 16:9
    width: "100%",
    height: "100%",
  },

  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: color.green,
    color: color.white,
    fontWeight: "bold",
    fontSize: "20px",
  },

  Typography: {
    color: color.white,
    fontWeight: "bold",
    fontSize: "20px",

  },
  atag: {
  
    textDecoration: "none",
    color: color.white,
    fontWeight: "bold",
  
  
  },
}));

export default function RecipeReviewCard({ photo, key, text, url }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} key={key}>
        <CardMedia className={classes.media} image={photo} title={text} />
        <CardContent className={classes.text}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.Typography}
          >
         < a href={url} className={classes.atag}>
            {text}
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
