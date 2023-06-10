import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModule.module.css";
const ErrorModule = (em) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={em.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{em.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{em.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={em.onConfirm}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModule;
