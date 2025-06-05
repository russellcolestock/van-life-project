import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Vans() {
    const [vanData, setVanData] = useState([])

    useEffect( () => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans)
            })
    }, [] )

    return (
        <div>
            <h1>Vans page goes here 🚐</h1>
            {vanData.map(van => (
                <div key={van.id}>
                    <img src={van.imageUrl} />
                    <div>
                        <h2>{van.name}</h2>
                        <p>{van.price}</p>
                    </div>
                    <button>{van.type}</button>
                </div>
            ))}
        </div>
    )
}