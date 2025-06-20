import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function VanDetail() {
    const [van, setVan] = useState([])

    const params = useParams() //this gets the id for each van
    console.log(van)

    useEffect( () => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    
    function capitalize(word = "") {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                    <i className={`van-type ${van.type} selected`}>{capitalize(van.type)}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className="van-description">{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) :<h2>Loading...</h2>}
        </div>
    )
}