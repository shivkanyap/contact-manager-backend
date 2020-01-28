import React from 'react';
// import axios from 'axios'
// import ContactList from './contacts/tableContact'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Add from './components/Addcontact'
import ContactShow from './components/Show'

class App extends React.Component{
  
//   componentDidMount()
//   {
//       axios.get('http://localhost:5000/contacts')
//       .then(response=>{
//  //       console.log(response.data)
//         this.setState(()=>({
//           contacts:response.data,

//         }))
//       })
//   }
  render()
  {
    return(
        <div>
        <BrowserRouter>
         
        <h1>Conatact manager</h1>
        <Link to="/"> Home </Link> |
        <Link to="/contacts">Contacts</Link>

        
        <Switch> 
            <Route path="/" component={Home} exact={true} />
            <Route path="/contacts" component={List} exact={true}/>
            <Route path="/contacts/addcontact" component={Add} exact={true}/>
            <Route path="/contacts/:id" component={ContactShow}/>
            </Switch>
            </BrowserRouter>
      </div>
    )
  }
}

export default App