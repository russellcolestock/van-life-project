import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const [hostVan, setHostVan] = useOutletContext()
    
    return (
        <div className="host-van-photos-container">
            <img src={hostVan.imageUrl} />
        </div>
    )
}