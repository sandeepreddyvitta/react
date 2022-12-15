import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const onKeyPress = (e) => {
        if (e.key === "Enter")
            onsubmit(searchTerm)
    }
    return (
        <Paper elevation={6} style={{ padding: "250px" }}>
            <TextField
                fullWidth
                label="search..."
                onChange={e => setSearchTerm(e.target.value)}
                onKeyPress={onKeyPress} />
        </Paper>
    );

}

export default SearchBar