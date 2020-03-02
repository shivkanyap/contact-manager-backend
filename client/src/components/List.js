import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import css from '../components/'

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
               
                {/* <h4>{this.state.contacts}</h4> */}
                <table className="table">
                        <thead>
                            <tr>
                                <th> # </th>
                                <th> Name </th>
                                <th> Mobile </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.contacts.map((contact, index) => {
                                return (
                                    <tr key={contact._id}> 
                                        <td> { index + 1 } </td> 
                                        <td> <Link to={`/contacts/${contact._id}`}> {contact.name} </Link> </td> 
                                        <td> { contact.mobile } </td>
                                        <td>
                                            <Link to={`/contacts/${contact._id}`}> 
                                                Show
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                  {/* <ul>
                                {
                                    this.state.contacts.map((contact,index) => {
                                        return (
                                            <li key={contact._id}> <Link to={`/contacts/${contact._id}`}>{contact.name} </Link> </li>
                                            <li>{contact.mobile}  <Link to={`/contacts/${contact._id}`}>show</Link></li>
                                            
                                        )
                                    })
                                }
                                </ul>  */}
             
            <Link to="/contacts/addcontact">Add Contact</Link>
            </div>
        )
    }
    
}
export default List
