import React, {Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends Component{
    constructor() {
        super()

        this.state = {
            name: '',
            title: '',
            email: '',
            phone: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            message
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
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
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default Contact;