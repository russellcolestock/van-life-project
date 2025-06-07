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

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const vanElements = vanData.map(van => (
        <Link to={`/vans/${van.id}`}>
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-info">
                    <h2>{van.name}</h2>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{capitalize(van.type)}</i>
            </div>
        </Link>
    ))

    return (
        <div className="vans-wrapper">
            <h1>Explore our van options</h1>
            <div className="filter-btns-container">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button>Clear filters</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}