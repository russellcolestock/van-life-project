import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getHostVans } from "../../api"

export default function HostVanDetail() {
    const { id } = useParams()
    const [hostVan, setHostVan] = useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const activeStyles ={
        color: "#161616",
        textDecoration: "underline",
        fontWeight: "700"
    }

    useEffect( () => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
        // fetch(`/api/host/vans/${params.id}`)
        //     .then(res => res.json())
        //     .then(data => setHostVan(data.vans))
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section className="host-van-el-wrapper">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-el-inner-wrapper">
                <div className="host-van-el-container">
                    <img src={hostVan.imageUrl} />
                    <div>
                        <button>{hostVan.type}</button>
                        <p className="host-van-el-name">{hostVan.name}</p>
                        <p className="host-van-el-price">${hostVan.price}/day</p>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                        <NavLink
                            to="."
                            relative
                            end
                            style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Details
                        </NavLink>

                        <NavLink
                            to="pricing"
                            style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Pricing
                        </NavLink>

                        <NavLink
                            to="photos"
                            style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Photos
                        </NavLink>
                    </nav>

                <Outlet context={[hostVan, setHostVan]} />
            </div>
        </section>
        
    )
}