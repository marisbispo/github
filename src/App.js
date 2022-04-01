import React, { Component } from 'react'
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax'

class App extends Component{
  constructor(){
    super()
    this.state ={
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  handleSearch(e){
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13
    if(keyCode === enter){
      this.setState({isFecthing: true})
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result)=>{
        this.setState({
          userinfo:{
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
      .always(()=> this.setState({isFetching:false}))
    
    }
  }

  getGithubApiUrl(username, type){
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
  }

  getRepo(type){
    return(e)=>{
      const username = this.state.userinfo.login
      ajax().get(this.getGithubApiUrl(username, type))
      .then((result)=>{
        this.setState({
          [type]: result.map((repo)=>({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render(){
    return(
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepo('repos')}
        getStarred={this.getRepo('starred')}
      />
    )
  }
}

export default App;
