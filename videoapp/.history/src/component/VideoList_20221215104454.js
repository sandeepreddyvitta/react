import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'


const VideoList = ({ videos, onSelectVideo }) => {
    const listOfVideos = videos.map(video => (
        <VideoItem
            onSelectVideo={onSelectVideo}
            key={video.VideoItem.videoId}
            video={video} />
    ))
    return (
        <>
            <Grid container spacing={10}>
                {listOfVideos}
            </Grid>
        </>
    )
}

export default VideoList