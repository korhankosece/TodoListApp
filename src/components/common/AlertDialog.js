import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = (props) => {
    const { open, setOpen, action } = props;

    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        action();
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={'xs'}
        >
            <DialogTitle>
                {"Delete"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText >
                    Are you sure?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog;