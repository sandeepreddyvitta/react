import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const onKeyPress = (e) => {
        if (event.key === "Enter")
            onsubmit(searchTreer)
    }
    return (
        <Paper elevation={6} style={{ padding: "250px" }}>
            <TextField
                fullWidth
                label="search..."
                onChange={e => setSearchTerm(e.target.value)}
                onKeyPress={onKeyPress} />

        </Paper>
    )
}

export default SearchBar