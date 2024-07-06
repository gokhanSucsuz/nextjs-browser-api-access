"use client"
import React, { useEffect, useState } from 'react'

const Geolocation = () => {
    const [position, setPosition] = useState("")
    console.log(navigator.geolocation)
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                console.log(pos)
                setPosition(pos.coords)
            }, (error) => {
                console.log("error", error)
            })
        }
    }, [])
    return (
        <div>
            Geolocation = Your Location is
            {JSON.stringify(position)}
        </div>
    )
}

export default Geolocation
