import React from 'react';
import {Dialog, DialogTitle, DialogContent, Button} from "@material-ui/core";


function PopUp(props) {
    const { onClose, selectedValue, children, openPopup, setOpenPopup } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };

    return (
        <Dialog  open={openPopup} maxWidth="md" onclose={handleClose}>
            <DialogTitle>
                <Button color="secondary" style={{position:'absolute', right:'10px'}} onClick={() => setOpenPopup(false)}>X</Button>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopUp
