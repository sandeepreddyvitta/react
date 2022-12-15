import React from 'react'
import youtube from './youtube'
import { Grid } from '@material-ui/core'
import SearchBar from './SearchBar'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'


const Home = () => {
    return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        {SearchBar}
                    </Grid>
                    <Grid item xs={8}>
                        {VideoDetails}
                    </Grid>
                    <Grid item xs={4}>
                        {VideoList}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home