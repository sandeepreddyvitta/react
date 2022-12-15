import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = ({ video: { id: { videoId }, snippet: { title, channnelTitle, description } } }) => {
    if (!videoId) return <div>Loading...</div>
    return (
        <>

            <Paper>

            </Paper>
        </>
    )
}

export default VideoDetails