import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVan } from "../../api"

export default function VanDetail() {
    const [van, setVan] = useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const {id} = useParams() //this gets the id for each van
    const location = useLocation()

    useEffect( () => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data) 
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (loading) {
        return (
            <h1 
                style={{
                padding: "50px 26px", 
                backgroundColor: "#FFF7ED",
                margin: "0"
                }}
            >Loading...</h1>
        )
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    
    function capitalize(word) {
        //return word.charAt(0).toUpperCase() + word.slice(1)
        const str = String(word || "")
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const search = location.state?.search || ""
    const type = capitalize(location.state?.type) || "all"

    return (
        <div className="van-detail-container">
            <Link
               to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            {van && (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                    <i className={`van-type ${van.type} selected`}>{capitalize(van.type)}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className="van-description">{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            )} 
        </div>
    )
}