import React,{useState,useEffect} from 'react';
import {FormControl,NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api';
import styles from './PickCountry.module.css';

const PickCountry = ({handleCountryChange}) => {

    const [countries, setcountries] = useState([]);

    useEffect(() => {
        const countriesList = async () =>{
            setcountries(await fetchCountries());
        }

        countriesList();
    },[setcountries]);

    return(
        <>
        <FormControl className={styles.FormControl} >
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value="">Global (Worldwide)</option>
                {countries.map((country) =>   <option value={country} key={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </>
    )

}

export default PickCountry;