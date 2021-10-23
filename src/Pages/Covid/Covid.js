import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState} from 'react'

const Covid = () => {
    const [latest, setLatest] = useState([]);
    const [results, setResults] = useState([]);
    useEffect(() => {
        axios
          .all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries"),
          ])
          .then((responseArr) => {
            setLatest(responseArr[0].data);
            setResults(responseArr[1].data);
          })
          .catch((err) => {
            console.log(err);
          });
          console.log(latest);
          console.log(results);
    }, []);

    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();

    const countries = results.map(data => {
        return(
            <div style={{border: '1px solid', padding: '10px'}}>
                <h3>{data.country}</h3>
                <img src={data.countryInfo.flag} /><br />
                Cases {data.cases}
            </div>
        );
    });

    return (
        <div align='center'>

            <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/Home"
            >
                homepage 
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                logout
            </Button>

            <div className='box' style={{border: '2px solid', padding:"10px", backgroundColor: "red", width: "500px"}}>
            <div style={{border: '1px dashed'}}>
                <h2 align='center'>Today's Cases</h2>
                <div className='content'>
                    {latest.todayCases}
                </div> 
            </div><br/>
                <div>
                    Last updated {lastUpdated}
                </div>
            </div>

            <br/>

            <div className='box' style={{border: '2px solid', padding:"10px", backgroundColor: "yellow", width: "500px" }}>
            <div style={{border: '1px dashed'}}>
            <h2 align='center'>Today's Death</h2>
                <div className='content'>
                    {latest.todayDeaths}
                </div> 
            </div><br/>
                <div>
                    Last updated {lastUpdated}
                </div>
            </div>
            
            <br/>

            <div className='box' style={{border: '2px solid', padding:"10px", backgroundColor: "blue", width: "500px"}}>
            <div style={{border: '1px dashed'}}>
            <h2 align='center'>Today's Recovered</h2>
                <div className='content'>
                    {latest.todayRecovered}
                </div>
            </div> <br/>
                <div>
                    Last updated {lastUpdated}
                </div>
            </div>

            <br/>

            <div className='box' style={{border: '2px solid', padding:"10px", backgroundColor: "cyan", width: "500px"}}>
            <div style={{border: '1px dashed'}}>
            <h2 align='center'>Total Cases</h2>
                <div className='content'>
                    {latest.cases}
                </div> 
            </div><br/>
                <div>
                    Last updated {lastUpdated}
                </div>
            </div>

            <br/>
            <br/>
            <h2><u>Country wise Tracking</u></h2>
            <br/>
            <br/>

            {countries}            
            
        </div> 
    );
};

export default Covid
