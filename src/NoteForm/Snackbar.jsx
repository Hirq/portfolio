import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      textDecoration: 'none !important' ,
    },
    padding: '5px',
  },
  buttonSubmit:{
    textAlign: 'center',
    minWidth: '90px',
    color: 'white',
    backgroundColor: '#20693C',
    border: '1px solid #fff', 
    borderRadius: '1vh',
    marginRight: '20px',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#20693C',
      border: '1px solid #20693C',
      borderRadius: '1vh',
    },
  },
  submit:{
    width:'100%',
    height:'100%',
    textDecoration: 'none !important' ,
    color: 'inherit',
    "&:hover": {
      color: 'inherit',
    },
  }
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <a className={classes.submit} href="/portfolio">
    <div className={classes.root} onClick={handleClick} >
        Submit
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert 
         onClose={handleClose} severity="success">
          Message sent!
        </Alert>
      </Snackbar>
    </div>
    </a>
  );
}