import React from 'react'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Medicine() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
            <h1>Medicines</h1>
            <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Medicines
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Medicines</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name='name'
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name='quantity'
            label="Quantity"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name='price'
            label="Price"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name='expiry'
            label="Expiry"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
        </>
        
    );
}

export default Medicine;