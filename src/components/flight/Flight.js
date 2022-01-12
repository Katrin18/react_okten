import React from 'react';

const Flight = (props) => {

    const {mission_name, launch_year, mission_patch}=props;

    return (
        <div>
            {mission_name}--{launch_year}--<img src={mission_patch} alt="mission_patch" width="200px"/>
        </div>
    );
};

export default Flight;
