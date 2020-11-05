import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";

interface AlertDialogProps {
  src?: string;
  title?: string;
  show?: boolean;
  handleClose(): void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  src,
  title,
  show = false,
  handleClose,
}) => {
  return (
    <div>
      <Dialog
        dir="rtl"
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <iframe
            src={src}
            title={title}
            width={350}
            height={400}
            frameBorder={0}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
