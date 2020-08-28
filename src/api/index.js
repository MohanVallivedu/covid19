import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchGlobal = async (country) => {
    try{
        let changedUrl = url;
        if(country)
        {
            changedUrl = `${url}/countries/${country}`;
        }
        const {data: {confirmed,deaths,recovered,lastUpdate}} = await axios.get(changedUrl);
        return {confirmed,deaths,recovered,lastUpdate};
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async() =>{
    try{
        const {data} = await axios.get(`${url}/daily`);
       const dailydata = data.map((daily) => ({
           confirmed:daily.confirmed.total,
           deaths:daily.deaths.total,
           date:daily.reportDate
       })
       );

       return dailydata;
    }
    catch(error){
        console.log(error);
    }
}


export const fetchCountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
       return countries.map((country) => country.name);
    }
    catch(error){
        console.log(error);
    }
}