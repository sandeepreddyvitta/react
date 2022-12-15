import React from 'react'
import youtube from './youtube'
import { Grid } from '@material-ui/core'
import SearchBar from './SearchBar'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'


const Home = () => {
    return (
        <div>
            home
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid>
                            {SearchBar}
                        </Grid>
                        <Grid>
                            {VideoDetails}
                        </Grid><Grid>
                            {VideoList}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home