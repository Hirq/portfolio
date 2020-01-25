import React, { Component } from 'react';
import './NoteForm.css';

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

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleNameInput(e){
        this.setState({
            newNameContent: e.target.value, // the value of the text input
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
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(
            this.state.newNameContent,
            this.state.newTitleContent,
            this.state.newEmailContent,
            this.state.newPhoneContent,
            this.state.newMessageContent
            );

        // Set newNoteContent back to an empty string.
        this.setState({
            newNameContent: '',
            newTitleContent: '',
            newEmailContent: '',
            newPhoneContent: '',
            newMessageContent: ''
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Name"
                value={this.state.newNameContent} 
                onChange={this.handleNameInput} />

                <input className="noteInput"
                placeholder="Title"
                value={this.state.newTitleContent} 
                onChange={this.handleTitleInput} />

                <input className="noteInput"
                placeholder="Email"
                type="email"
                value={this.state.newEmailContent}
                onChange={this.handleEmailInput} />

                <input className="noteInput"
                placeholder="Phone"
                type="number"
                value={this.state.newPhoneContent}
                onChange={this.handlePhoneInput} />

                <input className="noteInput"
                placeholder="Message"
                value={this.state.newMessageContent}
                onChange={this.handleMessageInput} />

                <button className="noteButton"
                onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;