import React, {Component } from 'react';
import { DB_CONFIG } from './base';
import firebase from 'firebase/app';
import 'firebase/database';
import Note1 from './Note/Note1';
import NoteForm from './NoteForm/NoteForm';


class Contact extends Component{
    constructor(props){
        super(props);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);


        if (!firebase.apps.length) {
          firebase.initializeApp(DB_CONFIG);
        }
        this.database = firebase.database().ref().child('notes');

        // We're going to setup the React state of our component
        this.state = {
          notes: [],
        }
      }
    
      componentWillMount(){
        const previousNotes = this.state.notes;
    
        // DataSnapshot
        this.database.on('child_added', snap => {
          previousNotes.push({
            id: snap.key,
            messageName: snap.val().messageName,
            messageTitle: snap.val().messageTitle,
            messageEmail: snap.val().messageEmail,
            messagePhone: snap.val().messagePhone,
            messageText: snap.val().messageText
          })
    
          this.setState({
            notes: previousNotes
          })
        })
    
        this.database.on('child_removed', snap => {
          for(var i=0; i < previousNotes.length; i++){
            if(previousNotes[i].id === snap.key){
              previousNotes.splice(i, 1);
            }
          }
    
          this.setState({
            notes: previousNotes
          })
        })
      }
    
      addNote(name, title, email, phone, text){
        this.database.push().set({
          messageName: name,
          messageTitle: title,
          messageEmail: email,
          messagePhone: phone,
          messageText: text
        });
      }
    
      removeNote(noteId){
        console.log("from the parent: " + noteId);
        this.database.child(noteId).remove();
      }
    
      render() {
        return (
          <div className="notesWrapper">
          <div className="notesFooter">
            <NoteForm addNote={this.addNote} />
          </div>
        </div>
        );
      }
}

export default Contact;
