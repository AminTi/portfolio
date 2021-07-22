import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "../components/Select";
import Box from "@material-ui/core/Box";
import { createClient } from "contentful";
import SubHeader from "../components/SubHeader";
import ImageCpnt from "../components/ImageCpnt";
import Image from "next/image";

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
  spacer2: {
    margin: "8%",
  },
  spacer3: {
    margin: "3%",
  },
}));

export async function getStaticProps() {
  const client = createClient({
    space: "822gsnozbtys",
    accessToken: "Q8TN4lOQ_s-jgscPjrCTpCX6SYTABc42QsIcWKZmZog",
  });

  const res = await client.getEntries({ content_type: "portfolio" });
  return {
    props: {
      portfolios: res.items,
    },
  };
}

const Projects = ({ portfolios }) => {


  const classes = useStyles();
  const [data, setData] = useState(null);
  const test = [];
  const arrTitle = [];


   portfolios.map((item) => {
    arrTitle.push(item.fields.tech);
  });

  const filterTitle = arrTitle.filter((item, pos) =>{
    return arrTitle.indexOf(item) == pos;
  }) 
  
  let filtredData =
    data &&
    portfolios.filter((item) => {
      return item.fields.tech == data;
    });


  const ProjectsData =
    data === "All" || data === null ? portfolios : filtredData;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
      maxWidth="xl"
    >
      <Box className={classes.spacer3} />
      <SubHeader text={"Projects"} colorgreen />
      <Box className={classes.spacer3} />
      <Select text={filterTitle} storeData={setData} />
      <Box className={classes.spacer3} />
      <Container container className={classes.subContainer} maxWidth="xl">
        {ProjectsData &&
          ProjectsData.map((item, index) => {
            return (
              <Card
                key={index}
                photo={item.fields.projectpic.fields.file.url}
                text={item.fields.title}
                url={item.fields.url}
              />
            );
          })}
      </Container>
      <Box className={classes.spacer2} />
    </Grid>
  );
};

export default Projects;
