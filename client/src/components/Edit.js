import React from 'react'
import ContactForm from './Form'
import axios from 'axios';

class Edit extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            contact: {},
            isLoaded: false 
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`http://localhost:5000/contacts/${id}`
           
        .then(response => this.setState(() => ({ contact: response.data, isLoaded: true }))))
    }

    handleSubmit = (formData) => {
        const id = this.props.match.params.id
        console.log(id)
        axios.put(`http://localhost:5000/contacts/${id}` 
           
        
            .then(response => {
                console.log(response.data)
                this.props.history.push(`/contacts/${response.data.id}`)
            }))
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h2>Edit Contact</h2>
                    {this.state.isLoaded && <ContactForm handleSubmit={this.handleSubmit} contact={this.state.contact} />}
                </div>
            </div>
        )
    }
}

export default Edit