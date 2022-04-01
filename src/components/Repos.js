import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({repos, className, title}) => (
<div className={className}>
    <h3>{title}</h3>
    <ul>
       {repos.map((repo, index)=>(
            <li key={index}>
                <a href={repo.link}>{repo.name}</a>
            </li>
       ))}
    </ul>
</div>
)

Repos.defaultProps ={
    className: ''
}

Repos.propTypes ={
    repos: PropTypes.array,
    className: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default Repos
