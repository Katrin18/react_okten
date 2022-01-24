import React from 'react';

const Photo = ({photo}) => {
    const {albumId, id, title, url} = photo;
    return (
    <div>
        <div>{albumId}</div>
        <div>{id}</div>
        <div>{title}</div>
        <div><img src={url} alt="url" width="200px"/></div>
    </div>
)
    ;
};

export default Photo;
