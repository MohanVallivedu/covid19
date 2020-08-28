import React from 'react';
import {Grid,Card,CardContent,Typography, Button, CardActions,CircularProgress} from '@material-ui/core';
import styles from './Card.module.css';
import Countup from 'react-countup';
import cx from 'classnames';


const card = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {

    if(!confirmed)
    {
        return(<CircularProgress />);
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.confirmed,styles.card)}>
                    <CardContent>
                        <Typography color="primary" variant="h6" gutterBottom>Confirmed</Typography>
                        <Typography variant="h6">
                            <Countup start={0} end={confirmed.value} duration={1.6} separator=",">
                            </Countup>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Number of Confirmed cases </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" target='_blank' href="https://coronavirus.jhu.edu/map.html">
                            Learn More</Button>
                    </CardActions>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.deaths,styles.card)}>
                    <CardContent>
                        <Typography color="secondary" variant="h6" gutterBottom>Deaths</Typography>
                        <Typography variant="h6">
                            <Countup start={0} end={deaths.value} duration={1.8} separator=",">
                            </Countup>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Number of deaths caused</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" target='_blank' href="https://coronavirus.jhu.edu/map.html">
                            Learn More</Button>
                    </CardActions>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.recovered,styles.card)}>
                    <CardContent>
                        <Typography color="textPrimary" variant="h6" gutterBottom>Recovered</Typography>
                        <Typography variant="h6">
                            <Countup start={0} end={recovered.value} duration={1.6} separator=",">
                            </Countup>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Total Recovered</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" target='_blank' href="https://coronavirus.jhu.edu/map.html">
                            Learn More</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </div>
    )

}

export default card;