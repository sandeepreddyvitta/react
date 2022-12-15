import React from 'react'
import youtube from './youtube'
import { Grid } from '@material-ui/core'


const Home = () => {
    return (
        <div>
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid>
                            {SearchBar}
                        </Grid>
                        <Grid>
                            {VideoDetail}
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