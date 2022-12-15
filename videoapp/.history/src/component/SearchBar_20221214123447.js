import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

const SearchBar = () => {
    return (
        <Paper elevation={6} style={{ padding: "250px" }}>
            <TextField
                fullWidth
                label="search..." />
        </Paper>
    )
}

export default SearchBar