import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import color from "../components/color";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "../components/InputField";
import ButtonCpmnt from "../components/ButtonCpmnt";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import Snackbars from "./SnackBar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  spacer: {
    margin: "5%",
  },
  spacer2: {
    margin: "8%",
  },
  form: {
    display: "flex",
    flexDirection: "column",

    minWidth: "50%",

    [theme.breakpoints.down("sm")]: {
      minWidth: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "90%",
    },
  },
  btn: {
    margin: "0 auto",
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  snack: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
  },
}));

const Form = () => {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [scusses, setScusses] = useState(false);
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const formClickHandler = (e) => {
    e.preventDefault();
    if (!mailformat.test(email)) {
      setOpen(true);
    } else if (subject.length < 2) {
      setOpen(true);
    } else if (message.length < 2) {
      setOpen(true);
    } else {
      fomrsFree(email, subject, message);
    }

    setEmail("")
    setSubject("")
    setMessage("")
   };

  const fomrsFree = (email, subject, message) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/mayajldg",
      data: { email, subject, message },
    })
      .then(() => {
        setScusses(true);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <>
      <form className={classes.form} onSubmit={formClickHandler}>
        <InputField
          placeholder={"Epost"}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <InputField
          placeholder={"Subject"}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          value={subject}
        />
        <InputField
          multiline
          placeholder={"Message"}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
        />
        <Container className={classes.btn}>
          <ButtonCpmnt
            text={"Submit"}
            send
            value="Submit"
            type="submit"
            clickHandler={() => null}
          />
        </Container>
      </form>

      <Snackbars
        openBar={open}
        closeBar={setOpen}
        severity={"error"}
        text={
          "Please check email format, subject and message should not be empty"
        }
      />
      <Snackbars
        openBar={scusses}
        closeBar={setScusses}
        severity={"success"}
        text={"Your message has been sent successfully"}
      />
      <Snackbars
        openBar={error}
        closeBar={setError}
        severity={"error"}
        text={"your message has not been delivered please try again later"}
      />

      <Box className={classes.spacer2} />
    </>
  );
};

export default Form;
