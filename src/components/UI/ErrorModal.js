import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

// adding portal here to the HTML root
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}
// adding portal here to the HTML root. It sounds confusing re-rooting a props from the props coming from <Backdrop /> into this function. tip: keep the same name of the calling props inside the portal as render inside the function.
function ModalOverlay(props) {
  return (
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
  );
}
// there are two onClick, one if clicking outside the box and another clicking on the button.
function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
