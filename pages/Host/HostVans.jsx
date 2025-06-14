import React from "react";
import { useState, useEffect } from "react";

export default function HostVans() {
    const [yourVan, setYourVan] = useState([])

    useEffect( () => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setYourVan(data.vans.filter(van => van.hostId.includes(123))))
    }, [])

    console.log(yourVan)
    const yourVanList = yourVan.map( van => (
        <div key={van.id} className="your-van-list-container">
            <div style={{width: '65px'}}>
                <img src={van.imageUrl} />
            </div>
            <div className="van-list-info">
                <h2>{van.name}</h2>
                <p>${van.price}/day</p>
            </div>
        </div>
    ))

    return (
        <div className="host-van-container" style={{margin: 'none'}}>
            <h1 style={{margin: '0', paddingBottom: '32px'}}>Your listed vans</h1>
            {yourVanList}
        </div>
    )
}