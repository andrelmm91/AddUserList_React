import React from "react";
import Wrappers from "../helpers/Wrappers";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

// there are two onClick, one if clicking outside the box and another clicking on the button.
function ErrorModal(props) {
  return (
    <Wrappers>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </Wrappers>
  );
}

export default ErrorModal;
