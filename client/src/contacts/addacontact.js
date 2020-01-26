import React from 'react'
class  Contact extends React.Component{
    render()
    {
        return(
            <tr>
                <td>{this.props.contact.id}</td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.email}</td>
                <td>{this.props.contact.mobile}</td>
            </tr>
        )
    }
}
export default Contact