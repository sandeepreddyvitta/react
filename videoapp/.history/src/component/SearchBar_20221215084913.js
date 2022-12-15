import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => setSearchTerm(e.target.value);
    const onKeyPress = (e) => {
        if (e.key === "Enter")
            onSubmit(searchTerm)
    }
    return (
        <Paper elevation={4} style={{ padding: "25px" }}>
            <TextField
                fullWidth
                label="search..."
                onChange={handleChange}
                onKeyPress={onKeyPress} />
        </Paper>
    );

}

export default SearchBar