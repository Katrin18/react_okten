import React from 'react';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {photosService} from "../../servies/photos.service";
import Comment from "../../components/comment/Comment";
import Photo from "../../components/photo/Photo";

const PhotosPage = () => {
    const {id} = useParams();
    const [photos, setPhotos] = useState(null);
    useEffect(() => {
        photosService.getById(id).then(value => setPhotos([...value]))
    }, [id])
    return (
        <div>
            <div>
                <h1>Photos</h1>
                {photos && photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default PhotosPage;
