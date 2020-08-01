import React from "react";

import "../modal/LinkModal.scss";

import logo from "../asset/logo.jpeg";
import Card from "@material-ui/core/Card";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const platform = { ...props.platform };
  console.log(platform);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button
        className="zg-block zg-link"
        target="_blank"
        style={{ color: platform.hex, border: `2px solid ${platform.hex}` }}
        variant="contained"
        onClick={handleClickOpen}
      >
        {platform.name}
      </Button>

      <Dialog open={open} keepMounted onClose={handleClose}>
        <Card
          className="zg-link-modal"
          style={{border: `4px solid ${platform.hex}`}}
          target="_blank"
          href={platform.url}
        >
          <Button
            style={{ color: platform.hex, border: `2px solid ${platform.hex}` }}
            className="zg-link-in-modal"
            target="_blank"
            href={platform.url}
          >
            Go to Stage 18 on {platform.name}
          </Button>
          <br/>
          <Button
            style={{ color: platform.hex, border: `2px solid ${platform.hex}` }}
            className="zg-cancel-modal"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Card>
      </Dialog>
    </div>
  );
}
