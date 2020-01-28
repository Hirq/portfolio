import React, { Component } from 'react';
import './NoteForm.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CustomizedSnackbars from './Snackbar'


const styles = theme => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '700px',
        overflowY: 'auto',
        maxHeight: '100vh', 
      },
    
      textInput:{
        width: '100%',
        maxWidth:'30rem',
        marginTop: 10,
        marginBottom: 10,
      },
      notchedOutline: {
        borderWidth: "1px",
        borderColor: "#20693C !important"
      },
      textArea:{
        marginTop: 15,
        marginBottom: 10,
        padding: 5,
        width: '100%',
        maxWidth:'60rem',
        borderRadius: '1vh',
        "&:focus": {
          border: '1px solid #3449EF',
          borderRadius: '1vh',
        },
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
      divNameContactForm:{
        textAlign: 'center',
        fontSize: '30px',
        border: '1px solid #20693C',
        borderRadius: '10vh',
        fontWeight: '800'
      },
    
      closeContactForm:{
        right: 0,
        position: 'absolute',
        fontSize: '35px',
        marginRight: '-10px',
        fontWeight: '500',
        marginTop: '-5px',
        "&:hover": {
          backgroundColor: '#fff',
          color: '#20693C',
          fontWeight: '800',
          marginTop: '-10px'
        },
      },
       
      divSubmit:{
        textAlign: 'center',
      },

      deleteUnderlining:{
        textDecoration: 'none !important' ,
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
  });

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNameContent: '',
            newTitleContent: '',
            newEmailContent: '',
            newPhoneContent: '',
            newMessageContent: '',
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePhoneInput = this.handlePhoneInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleNameInput(e){
        this.setState({
            newNameContent: e.target.value,
        })
    }

    handleTitleInput(e){
        this.setState({
            newTitleContent: e.target.value,
        })
    }

    handleEmailInput(e){
        this.setState({
            newEmailContent: e.target.value,
        })
    }

    handlePhoneInput(e){
        this.setState({
            newPhoneContent: e.target.value,
        })
    }

    handleMessageInput(e){
        this.setState({
            newMessageContent: e.target.value,
        })
    }


    writeNote(){
        this.props.addNote(
            this.state.newNameContent,
            this.state.newTitleContent,
            this.state.newEmailContent,
            this.state.newPhoneContent,
            this.state.newMessageContent
            );

        this.setState({
            newNameContent: '',
            newTitleContent: '',
            newEmailContent: '',
            newPhoneContent: '',
            newMessageContent: '',
        })
    }
    
    render(){
        const { classes } = this.props;
        const isEnabled =  this.state.newNameContent.length > 0 &&  this.state.newTitleContent.length > 0 && this.state.newMessageContent.length > 0 && this.state.newEmailContent.length > 0 


        return(
            <div>
                <div class="row">
                    <div class="col">
                        <TextField required id="outlined-basic" label="Name" variant="outlined" className={classes.textInput} 
                        InputLabelProps={{ style: { color: '#20693C' }}} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}
                        value={this.state.newNameContent} onChange={this.handleNameInput}
                        
                        />
                        <TextField required id="outlined-basic" label="Title" variant="outlined" className={classes.textInput}
                        InputLabelProps={{ style: { color: '#20693C' }}} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}
                        value={this.state.newTitleContent} onChange={this.handleTitleInput}
                        
                        />
                        </div>
                        <div class="col">
                        <TextField required id="outlined-basic" label="Email" variant="outlined" className={classes.textInput}
                        InputLabelProps={{ style: { color: '#20693C' }}} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}
                        value={this.state.newEmailContent} onChange={this.handleEmailInput}
                        required

                        />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" className={classes.textInput}
                        InputLabelProps={{ style: { color: '#20693C' }}} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}
                        value={this.state.newPhoneContent} onChange={this.handlePhoneInput}
                        type="number"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <TextField
                        required
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="3"
                        variant="outlined"
                        className={classes.textArea}
                        value={this.state.newMessageContent} onChange={this.handleMessageInput}
                        InputLabelProps={{ style: { color: '#20693C' }}} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <div className={classes.divSubmit}>
                            <a className={classes.deleteUnderlining} onClick={this.writeNote} href="/">
                                <Button disabled={!isEnabled} className={classes.buttonSubmit}>
                                    < CustomizedSnackbars />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NoteForm);





