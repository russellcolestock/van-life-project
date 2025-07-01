import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getVans } from "../../api";

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vanData, setVanData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    console.log(error)
    
    useEffect( () => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVanData(data)
            }
            catch(err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        } 
        loadVans()
    }, [] )

    const typeFilter = searchParams.get("type")
    
    const displayedVans = typeFilter
    ? vanData.filter( van => van.type === typeFilter)
    : vanData
    
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const vanElements = displayedVans.map(van => (
        <Link 
            to={van.id}
            state={{ 
                search: `?${searchParams.toString()}`,
                type: typeFilter 
            }}
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label={`View details for ${van.name}, 
                        priced at $${van.price} per day`}
            key={van.id}
        >
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

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return <h1  
            aria-live="polite"
            style={{
                padding: "50px 26px", 
                backgroundColor: "#FFF7ED",
                margin: "0"
            }}
        >Loading...</h1>
    }

    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }

    return (
        <div className="vans-wrapper">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={ () => handleFilterChange("type", "simple")} 
                    className={`van-type simple-filter ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>
                <button 
                    onClick={ () => handleFilterChange("type", "luxury")} 
                    className={`van-type luxury-filter ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>
                <button 
                    onClick={ () => handleFilterChange("type", "rugged")} 
                    className={`van-type rugged-filter ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>
                { typeFilter ? (
                    <button 
                        onClick={ () => handleFilterChange("type", null)} 
                        className={`van-type clear-filters`}
                    >Clear filters</button>
                ) : null }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}