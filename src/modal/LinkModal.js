import React from "react";

import "../modal/LinkModal.scss";

// import Card from "@material-ui/core/Card";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const platform = { ...props.platform };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="zg-platform-block">
      <button
        className="zg-link-button"
        target="_blank"
        style={{ color: platform.hex, cursor: "pointer" }}
        onClick={handleClickOpen}
      >
        {platform.name}
      </button>

      <Dialog open={open} keepMounted>
        <div
          className="zg-link-modal"
          style={{
            border: `4px solid ${platform.hex}`,
            textAlign: "center",
            width: "300px",
          }}
          target="_blank"
          href={platform.url}
        >
          <Button
            style={{ color: platform.hex, margin: "10px 0 10px 0" }}
            className="zg-link-in-modal"
            target="_blank"
            href={platform.url}
          >
            Go to Stage 18 on {platform.name}
          </Button>
          <br />
          <Button
            style={{ color: platform.hex, marginBottom: "10px" }}
            className="zg-cancel-modal"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
