import React from 'react'

const SearchBar = (props) => {
    return (
        <div className='col col-sm-4'>
            <input type="text"
                value={props.searchValue}
                onChange={e => props.setSearchValue(e.target.value)}
                placeholder="Type to search movies..." />
        </div>
    )
}

export default SearchBar