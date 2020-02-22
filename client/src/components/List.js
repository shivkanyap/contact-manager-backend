import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class List extends  React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            contacts:[]
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/contacts')
        // debugger;
        .then(response=>{
           console.log(response.data)
            this.setState(()=>({
                contacts:response.data
            }))
        })
    }
    render()
    {
        return(
            <div>   
               
                <h2>Listing contacts{this.state.contacts.length}</h2>
                <h4>{this.state.contacts}</h4>
                 <ul>
                                {
                                    this.state.contacts.map(contact => {
                                        return (
                                            <li key={contact._id}> <Link to={`/contacts/${contact._id}`}>{contact.name} </Link> </li>
                                        )
                                    })
                                }
                                </ul> 
            
            <Link to="/contacts/addcontact">Add Contact</Link>
            </div>
        )
    }
    
}
export default List
