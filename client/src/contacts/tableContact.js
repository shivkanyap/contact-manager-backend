import React from  'react'
import Contact from './addacontact'
const ContactList=(props)=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map(function(contact){
                    return <Contact key={contact._id} contact={contact.name}></Contact>
                })}
            </tbody>
        </table>
    )
}
export default ContactList