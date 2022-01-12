import React from 'react';

import {useEffect, useState} from "react";
import Flight from "../flight/Flight";

const Flights = () => {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights =>{ setFlights(flights.filter(flight=>flight.launch_year !== '2020'))})
    }, [])
    return (
        <div>
            {flights.map(value => <Flight key={value.flight_number}
                                          mission_name={value.mission_name}
                                          launch_year={value.launch_year}
                                          mission_patch={value.links.mission_patch}

            />)}
        </div>
    );
};

export default Flights;
