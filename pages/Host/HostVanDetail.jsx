import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

export default function HostVanDetail() {
    const params = useParams()
    
    const [hostVan, setHostVan] = useState([])

    useEffect( () => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans))
    }, [params.id])

    const hostVanEl = hostVan.map(van => (
        <div key={van.id} className="host-van-el-container">
            <img src={van.imageUrl} />
            <div>
                <button>{van.type}</button>
                <p className="host-van-el-name">{van.name}</p>
                <p className="host-van-el-price">${van.price}/day</p>
            </div>
        </div>
    ))
    

    return (
        <section className="host-van-el-wrapper">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {hostVanEl}
            <Outlet />
        </section>
    )
}