import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const [hostVan, setHostVan] = useOutletContext()

    return (
        <div className="host-van-info-container">
            <p><span>Name:</span> {hostVan.name}</p>
            <p><span>Category:</span> {hostVan.type}</p>
            <p className="host-van-info-description"><span>Description:</span> 
                {hostVan.description}
            </p>
            <p><span>Visibility:</span> Public</p>
        </div>
    )
}