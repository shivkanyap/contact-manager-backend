import React from 'react'
import axios from 'axios'
import ContactForm from './Form'

class Add extends React.Component
{

    handleSubmit = (formData) => {
        axios.post('http://localhost:3005/contacts', formData, {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            this.props.history.push(`/contacts/${response.data.contact._id}`)
        })
    }

    // constructor(props){
    //     super(props)
    //     this.state={
    //         contacts:{}
    //     }
    //     this.handleSubmit=this.handleSubmit.bind(this)
    // }       
  
    // handleSubmit(formData)
    // // debugger;
    // { alert("in")
    //     console.log('add the conatct')
    //     axios.post("http://localhost:5000/contacts/addcontact", formData)


    //     .then(response=>{
    //         if(response.data.hasOwnProperty('error '))
    //         {
    //             console.log(response.data.error)
    //         }
    //         else
    //         {
    //             console.log(response)
    //             console.log(response.data)
    //             this.props.router.push('/contacts')
    //         }
    //     })
    // }

    render()    
    {
        return(
            <div>
              
                <h2>Add Contacts</h2>
                
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default Add 