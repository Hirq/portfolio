import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note1 extends Component{

    constructor(props){
        super(props);
        this.messageName = props.messageName; 
        this.messageTitle = props.messageTitle; 
        this.messageEmail = props.messageEmail;
        this.messagePhone = props.messagePhone;
        this.messageText = props.messageText;

        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <p className="messageName">{ this.messageName }</p>
                <p className="messageTitle">{ this.messageTitle }</p>
                <p className="messageEmail">{ this.messageEmail }</p>
                <p className="messagePhone">{ this.messagePhone }</p>
                <p className="messageText">{ this.messageText }</p>
                
            </div>
        )
    }
}

Note1.propTypes = {
    messageName: PropTypes.string,
    messageTitle: PropTypes.string,
    messageEmail: PropTypes.string,
    messagePhone: PropTypes.string,
    messageText: PropTypes.string,
}

export default Note1;