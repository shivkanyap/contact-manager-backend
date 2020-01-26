import React from 'react'
import axios from 'axios'
import ContactForm from './Form'

class Add extends React.Component
{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
  
    handleSubmit(formData){
        console.log('add thte conatct')
        axios.post("https://cors-anywhere.herokuapp.com/http://localhost:5000/contacts", formData)
            .then(() => this.props.history.push('/contacts'))
            .catch(err => console.log(err))
    }
    render()    
    {
        return(
            <div>
                <h1>hii</h1>
                <h2>Add Contacts</h2>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default Add 