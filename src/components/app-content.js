import React from 'react'
import Search from './Search'
import UserInfo from './UserInfo'
import Repos from './Repos'
import Actions from './Actions'
import PropTypes from 'prop-types'

const AppContent = ({userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred}) => (
    <div className="app">
        <Search isDisabled={isFetching} handleSearch={handleSearch}/>
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}

        {!!repos.length && <Repos 
        className='repos' 
        title='Repositorios' 
        repos={repos}/>}

        {!!starred.length && <Repos 
        className='starred' 
        title='Favoritos' 
        repos={starred}/>}

    </div>
)

AppContent.propTypes={
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default AppContent