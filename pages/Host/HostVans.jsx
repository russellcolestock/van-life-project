import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)


    useEffect( () => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const yourVanList = vans.map( van => (
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

     if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="host-van-container" style={{margin: 'none'}}>
            <h1 style={{margin: '0', paddingBottom: '32px'}}>Your listed vans</h1>
            {yourVanList}
        </div>
    )
}