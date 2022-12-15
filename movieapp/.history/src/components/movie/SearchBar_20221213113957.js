import React from 'react'

const SearchBar = (props) => {
    return (
        <div className='col >
            <input type="text"
                className='form-control'
    value = { props.searchValue }
    onChange = { e => props.setSearchValue(e.target.value)}
placeholder = "Type to search movies..." />
        </div >
    )
}

export default SearchBar