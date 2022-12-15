import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <Grid xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} elevation={6}
                onClick={() => onSelectVideo(video)}>
                <img src={video.snippet.thumbnails.medium.url}
                    alt="thumbnail" style={{ marginRight: "10px" }} />
            </Paper>
        </Grid>
    )
}

export default VideoItem