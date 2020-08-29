import React from 'react';
import {FormControlLabel,FormLabel,FormControl,RadioGroup,Radio} from '@material-ui/core';
import styles from './ChartSwitch.module.css';

const ChartSwitch = ({handleChange}) => {
    //Bar true
    //Pie false
    return(
        <>
            <FormControl component="fieldset">
            <FormLabel component="legend">Chart Type</FormLabel>
            <RadioGroup aria-label="Chart" name="chartSelect" defaultValue="Pie" onChange={(e) => {handleChange(e.target.value)}} className={styles.Radio}>
                <FormControlLabel value="Pie" id="Pie" control={<Radio value="Pie"/>} label="Pie"/>
                <FormControlLabel value="Bar" id="Bar" control={<Radio value="Bar"/>} label="Bar"/>
            </RadioGroup>
            </FormControl>
        </>
    )

}

export default ChartSwitch;