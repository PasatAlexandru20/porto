import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Contact">
      <h3 className="section-title">Contact</h3>
      <p className="section-subtitle">
        Make your dream website come true with Alex
      </p>
      <p className="section-text">
        Contact us immediatiately to discuss the right solution for your
        bussiness website. We will help you make your dream website a reality
      </p>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="secondaryButton"
      >
        Get a quote
      </button>

      <Dialog  onClose={handleClose} open={open}>
        <div className="contactBackground">
          <DialogTitle>Set backup account</DialogTitle>

          <div style={{ padding: 40 }}>
            <TextField id="outlined-basic" label="Name" variant="filled" />
            <br />
            <br />
            <TextField id="outlined-basic" label="Email" variant="filled" />
            <br />
            <br />

            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Trimite mesajul tau..."
            />
            <br />
            <br />

            <Button className="greenButton" variant="contained">
              Contained
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Contact;
