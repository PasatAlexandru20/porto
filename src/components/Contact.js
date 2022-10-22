import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
 

  const submitHandler = async (e) => {
    debugger
    e.preventDefault();
    if (email === "" || name === "" || message === "") {
      return toast.error("Please fill email, subject and message");
    }
    try{
    setLoading(true)
    const {data} = await axios.post(`/api/email`, {
        email,
        message,
        name,
    })
    setLoading(false)
    toast.success(data.message)
 } catch (err) {
   setLoading(false)
   toast.error (
        err.response && err.response.data.message
        ? err.response.data.message
        : err.message
        )
    }
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

      <Dialog onClose={handleClose} open={open}>
        <div className="contactBackground">
          <DialogTitle>Set backup account</DialogTitle>

          <div style={{ padding: 40 }}>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              label="Name"
              variant="filled"
              value={name}
            />

            <br />
            <br />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email"
              type="email"
              variant="filled"
              value={email}
            />
            <br />
            <br />
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              id="message"
              label="Mesaj"
              multiline
              rows={4}
              defaultValue="Trimite-mi un mesaj"
              value={message}
            />
            <br />
            <br />

            <Button
              onClick={submitHandler}
              className="greenButton"
              variant="contained"
            >
              Send email
            </Button>
          </div>
        </div>
      </Dialog>

      <ToastContainer position="bottom-center" limit={1} />
    </div>
  );
};

export default Contact;
