import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import color from "./color";

import AppBar from "@material-ui/core/AppBar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width: "30vw",
    background: color.white,
    borderRadius: " 10px",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    background: color.white,
    border: `5px solid ${color.green}`,
    borderRadius: " 10px",
  },
}));

export default function SelectField({ text, storeData }) {
  const classes = useStyles();
  const [state, setState] = useState("");
  const [selectVal, setSelectVal] = useState("All");

  const handleChange = async (e) => {
    let search = e.target.value;
    setSelectVal(search)
    localStorage.clear();
    await localStorage.setItem("search", search);
    await storeData(localStorage.getItem("search"));
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
      <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectVal}
          className={classes.select}
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {text &&
            text.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
}
