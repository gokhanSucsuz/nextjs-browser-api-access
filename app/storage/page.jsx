"use client"
import React, { useEffect } from 'react'

const StoragePage = () => {
    console.log(window)
    console.log(localStorage)
    useEffect(() => {
        localStorage.setItem("test", "test value from localstorage")
        console.log(localStorage.getItem("test"))
        //localStorage.removeItem("test")
        sessionStorage.setItem("test", "test value from sessionstorage")
        console.log(sessionStorage.getItem("test"))
        //sessionStorage.clear()
    }, [])

    return (
        <div>
            Storage Page
            <br />
            localStorage = {
                localStorage.getItem("test")
            }
            <br />
            sessionStorage = {
                sessionStorage.getItem("test")
            }
        </div>
    )
}

export default StoragePage
