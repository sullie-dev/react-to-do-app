import React from "react";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";

import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getDate } from "./helper";

export default function DialogBox(props) {
  const { isOpen, handleOpen, createTodo, handleChange } = props;
  const today = getDate().toString()
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleOpen}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>whoop whoop</DialogContentText> */}
          <TextField
            required
            autoFocus
            onChange={handleChange}
            margin="dense"
            name="date"
            label="Due Date"
            type="date"
          />
          <TextField
            required
            
            onChange={handleChange}
            margin="dense"
            name="task"
            label="To Do"
            type="text"
            fullWidth
          />
          <TextField
            required
            onChange={handleChange}
            margin="dense"
            name="description"
            label="Description"
            type="text"
            multiline
            fullWidth
          />
          {/* TODO: add a drop down for importtance level */}
        </DialogContent>
        <DialogActions>
          <Fab onClick={handleOpen} color="secondary">
            <CloseIcon />
          </Fab>
          <Fab onClick={createTodo} color='primary'>
            <CheckIcon />
          </Fab>
        </DialogActions>
      </Dialog>
    </div>
  );
}
