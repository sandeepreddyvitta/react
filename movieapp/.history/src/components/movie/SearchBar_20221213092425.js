import React from 'react'

const SearchBar = (props) => {
    return (
        <div>
            <input type="text"
                value={props.value}
                onChange={e => props.setSearchValue(e.target.value)}
                placeholder="Type to search movies..." />
        </div>
    )
}

export default SearchBar