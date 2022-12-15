import React, { useState } from 'react'
import youtube from './youtube'
import { Grid } from '@material-ui/core'
import SearchBar from './SearchBar'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'


const Home = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
    return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetails video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
            params: {
                part: "snippet",
                maxResult: 5,
                key: "AIzaSyBESBfPpcX8JIlAspnlQv2OCetkKENYwzg",
                q: searchTerm,
            }
        });
        setVideos(videos);
        setSelectedVideo(videos[0]);
    }
}

export default Home