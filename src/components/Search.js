import React from 'react';

const Search = ({handleSearch, isDisabled}) =>(
<div className="search">
    <input type="text" placeholder='digite o nome ;)' onKeyUp={handleSearch} 
    disabled={isDisabled}/>
</div>
)

export default Search