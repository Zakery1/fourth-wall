import React from "react";

import "../modal/LogoModal.scss";

import logo from "../asset/logo.jpeg";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="zg-block">
      <img
        onClick={handleClickOpen}
        className="main-logo"
        src={logo}
        alt="fourth wall podcast logo"
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <img
          onClick={handleClickOpen}
          className="zg-modal"
          src={logo}
          alt="fourth wall podcast logo"
        />
      </Dialog>
    </div>
  );
}
