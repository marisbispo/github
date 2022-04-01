import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {

  constructor(){  
    super()
    this.state = {

      userinfo: {
        username: 'Maristela Bispo',
        photo: 'https://avatars.githubusercontent.com/u/64866385?v=4',
        login: 'marisbispo',
        repos: 12,
        followers: 10,
        following: 20
      },

      repos: [{
        name: 'Repo',
        link: '#'
      }],

      starred:[{
        name: 'Repo',
        link: '#'
      }]


    }
  }

  render() {
    return (
      <AppContent 
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}



export default App;
