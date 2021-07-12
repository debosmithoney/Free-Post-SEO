import React from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

function PopUp(props) {
  const { onClose, selectedValue, children, openPopup, setOpenPopup } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog open={openPopup} maxWidth="md" onclose={handleClose}>
      <Button
        color="secondary"
        style={{ position: "absolute", right: "10px", top: "10px", fontStyle:"bold" }}
        onClick={() => setOpenPopup(false)}
      >
        X
      </Button>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default PopUp;
