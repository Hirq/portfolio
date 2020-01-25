import React, {Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { DB_CONFIG } from './base';
import firebase from 'firebase/app';
import 'firebase/database';
import Note1 from './Note/Note1';
import NoteForm from './NoteForm/NoteForm';
import axios from 'axios';


class Contact extends Component{
    constructor(props){
        super(props);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    
        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref().child('notes');


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // We're going to setup the React state of our component
        this.state = {
          notes: [],
          name: '',
          title: '',
          email: '',
          phone: '',
          message: '',
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





    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, title, email, phone, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            title,
            email,
            phone,
            message,
        })
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
        
    }
    
      render() {
        return (
          <div className="notesWrapper">
          <div className="notesBody">
            {
              this.state.notes.map((note) => {
                return (
                  <Note1 
                  messageName={note.messageName} 
                  messageTitle={note.messageTitle}
                  messageEmail={note.messageEmail}
                  messagePhone={note.messagePhone}
                  messageText={note.messageText}

                  noteId={note.id} 
                  key={note.id} 
                  removeNote ={this.removeNote}/>
                )
              })
            }
          </div>
          <div className="notesFooter">
            <NoteForm addNote={this.addNote} />
          </div>
        </div>

        );
      }
}

export default Contact;

  /*       


        <Form onSubmit={this.handleSubmit} >
        <FormGroup>
            <Label for="name">Name:</Label>
            <Input
            type="text"
            name="name"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="title">Title:</Label>
            <Input
            type="text"
            name="title"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="email">Email:</Label>
            <Input
            type="email"
            name="email"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input
            type="text"
            name="phone"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="message">Message:</Label>
            <Input
            type="textarea"
            name="message"
            onChange={this.handleChange}>
            </Input>
        </FormGroup>
        <Button >Submit</Button>
        </Form>




        */