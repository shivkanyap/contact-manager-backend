import React from 'react'

class ContactForm extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log('constroctor',props)
        this.state={
            name:'',
            mobile:'',
            email:""
        }
    }
    handleName=(e)=>{
        const name=e.target.value
        this.setState(()=>({
            name
        }))
    }
    handleEmail=(e)=>{
        const email=e.target.value
        this.setState(()=>({
            email
        }))
    }
    handleMobile=(e)=>{
        const mobile=e.target.value
        this.setState(()=>({
            mobile
        }))
    } 
    componentWillReceiveProps(nextProps) {
        console.log('component will receive props - form', nextProps)
        const { name, email, mobile } = nextProps.contact
        this.setState(() => ({
            name, 
            email,
            mobile
        }))
    }

    handleSubmit=(e)=>
    {
        e.preventDefault()
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email
           
        }
        this.props.handleSubmit(formData)
        this.setState(()=>({
            name:'',
             email:'',
             mobile:''
         }))
    }
           
    render()
    {
        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </label><br/>

                    <label>
                        mobile
                        <input type="text" value={this.state.mobile} onChange={this.handleMobile}/>
                    </label><br/>

                    <label>
                        email
                        <input type="text" value={this.state.email} onChange={this.handleEmail}/>
                    </label><br/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}
export default ContactForm