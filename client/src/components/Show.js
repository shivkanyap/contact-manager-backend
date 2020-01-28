import React from 'react'
import {Link} from 'react-router-dom'
import axios from  'axios'

class ContactShow extends React.Component
{
    constructor()
    {
        super()
        this.state={
            contact:{}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            // api call to delete
            axios.delete(`/contacts/${this.state.contact._id}`)
                .then(() => this.props.history.push('/contacts'))
                .catch(err => window.alert(err))
        }
   }

   componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`/contacts/${id}`)
            .then(response => this.setState(() => ({ contact: response.data })))
   }


    render()
    {
        return(
            <div>
                <h2>{this.state.name}</h2>
                <h2>{this.state.mobile}</h2>
                <h2>{this.state.email}</h2>
                <Link to={`/contacts/edit/${this.state.contact._id}`}>edit</Link>
                <button onClick={this.handledelete}>Delete</button>
                <Link to="/contacts">back</Link>

            </div>
        )
    }
}
export default ContactShow