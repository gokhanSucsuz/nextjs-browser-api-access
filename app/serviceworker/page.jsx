"use client"
import React, { useEffect } from 'react'

const ServiceWorkerPage = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/serviceworker.js").then(registration => {
                console.log("registration: ", registration)
            }).catch(error => console.log("Error :  ", error))
        }
    }, [])

    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.addEventListener("message", (e) => {
                console.log(e)
                const { type, data } = e.data
            })
        }
    }, [])

    const sendMessage = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.controller.postMessage({ type: "customMessage", data: "NextJSApp" })
        }
    }
    return (
        <div>
            Serviceworker Page
            <button onClick={sendMessage}>Send a message to serviceworker</button>
        </div>
    )
}

export default ServiceWorkerPage
