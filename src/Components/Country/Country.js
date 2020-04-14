import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import './Country.css';
import {fetchCountries} from '../../api/index';



const Country = ({handleCountryChange}) => {
    const[fetchedCountries, setFetchCountries] = useState([]);
    useEffect(() => {
        const fetchedAPI  = async () => {
             setFetchCountries(await fetchCountries());
        }
        fetchedAPI();
    
    },[setFetchCountries]);
    return (
        <FormControl className="formControl">
            <NativeSelect  defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option  value="global">Global</option>
                {fetchedCountries.map((country,i) => <option  value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default Country;
