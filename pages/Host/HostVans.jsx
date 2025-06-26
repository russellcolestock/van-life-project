import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
    const [yourVan, setYourVan] = useState([])

    useEffect( () => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setYourVan(data.vans))
    }, [])

    const yourVanList = yourVan.map( van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
            style={{textDecoration: 'none'}}
        >
            <div key={van.id} className="your-van-list-container">
                <div style={{width: '65px'}}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                </div>
                <div className="van-list-info">
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <div className="host-van-container" style={{margin: 'none'}}>
            <h1 style={{margin: '0', paddingBottom: '32px'}}>Your listed vans</h1>
            {yourVanList}
        </div>
    )
}