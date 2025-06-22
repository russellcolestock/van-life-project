import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vanData, setVanData] = useState([])

    useEffect( () => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVanData(data.vans)
            })
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
            to={`/vans/${van.id}`}
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

    return (
        <div className="vans-wrapper">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={ () => setSearchParams({type: "simple"})} 
                    className="van-type simple-filter"
                >Simple</button>
                <button 
                    onClick={ () => setSearchParams({type: "luxury"})} 
                    className="van-type luxury-filter"
                >Luxury</button>
                <button 
                    onClick={ () => setSearchParams({type: "rugged"})} 
                    className="van-type rugged-filter"
                >Rugged</button>
                <button 
                    onClick={ () => setSearchParams({type: ""})} 
                    className="van-type clear-filters"
                >Clear filters</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}