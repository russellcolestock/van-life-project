import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const [hostVan, setHostVan] = useOutletContext()
    
    return (
         <div className="host-van-pricing-container">
            <p>${hostVan.price}<span>/day</span></p>
        </div>
    )
}