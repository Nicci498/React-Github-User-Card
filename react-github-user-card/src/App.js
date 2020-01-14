import React, {Component} from 'react';
import './App.css';
import UserCard from './userCard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor (){
    super()
    this.state = {
      name: '',
      login: '',
      email: '',
      avatar: '',
      followers: []
    }

  }

  componentDidMount (){

    axios.get('https://api.github.com/users/Nicci498')
        .then (response => { 
          this.setState ({
            name: response.data.name,
            login: response.data.login,
            email: response.data.email,
            avatar: response.data.avatar_url
          })
        })

     axios.get('https://api.github.com/users/Nicci498/followers')
        .then (response => {  
          console.log(`followers ${response.data}`)
          
        this.setState ({
          followers: response.data
        })  
      })
  }

  render() {
    return(
     
      <div className = 'App'>
    
        <h1>Git Hub User Cards</h1>

        {console.log(this.state) }
        <div className="center"><UserCard 
        name = {this.state.name}
        login = {this.state.login}
        email = {this.state.email}
        avatar = {this.state.avatar}
        /></div>

        <h2>Followers</h2>
          <div className="flex">
          {this.state.followers.map(e => {
            return (             
              
              <UserCard 
              name = {e.name}
              login = {e.login}
              email = {e.html_url}
              avatar = {e.avatar_url}
              />
                      
            )
          }
          )}
        </div>
      </div>
    )
  }
}
export default App;
