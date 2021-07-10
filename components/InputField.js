import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import color from "./color";

const useStyles = makeStyles({
  input: {
    background: color.white,
    // border: `1px solid ${color.green}`,
    margin: "1%",
    borderRadius: "5px",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: color.white,
      },
      "&:hover fieldset": {
        borderColor: color.green,
      },
    },
  },
});

const InputField = ({
  label,
  placeholder,
  multiline,
  onChange,
  value,

  // name,
  // type,
  // register,
}) => {
  const classes = useStyles();

  const TextArea = multiline ? 10 : null;
  return (
    <>
      <TextField
        // ref={register ? register : ""}
        // name={name}
        // type={type}
        onChange={onChange}
        value={value}
        multiline={multiline}
        rows={TextArea}
        id="outlined-basic"
        placeholder={placeholder}
        label={label}
        variant="outlined"
        className={classes.input}
        InputLabelProps={{
          style: {
            color: color.green,
            fontWieght: "bold",
          },
        }}
      />
    </>
  );
};

export default InputField;
