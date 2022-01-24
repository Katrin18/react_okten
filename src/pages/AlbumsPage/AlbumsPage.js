import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {albumsService} from "../../servies/albums.service";
import Album from "../../components/album/Album";

const AlbumsPage = () => {
    const {id}=useParams();
    const [albums,setAlbums]=useState(null);

    useEffect(()=>{
        albumsService.getAll(id).then(value => setAlbums([...value]))
    },[id])
    return (
        <div>
            <h1>Albums</h1>
            {albums && albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );

};

export default AlbumsPage;
