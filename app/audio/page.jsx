"use client"
import React, { useEffect, useRef, useState } from 'react'

const AudioPage = () => {
    const [record, setRecord] = useState(false)
    const [audioURL, setAudioURL] = useState("")
    let mediaRecorder = useRef();
    let chunks = []

    const stopRecord = () => {
        console.log(mediaRecorder)
        mediaRecorder.current.stop()
        setRecord(false)
    }
    const handleDataAvailable = (e) => {
        if (e.data.size > 0) {
            chunks.push(e.data)
            const audioBlob = new Blob(chunks, { type: "audio/wav" })
            const url = URL.createObjectURL(audioBlob)
            setAudioURL(url)
        }
    }
    const startRecord = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        mediaRecorder.current = new MediaRecorder(stream)
        mediaRecorder.current.ondataavailable = handleDataAvailable
        mediaRecorder.current.start()
        setRecord(true)
    }
    const playRecord = () => {
        const audio = new Audio(audioURL)
        audio.play()
    }
    return (
        <div>
            Audio Page
            {
                record ?
                    <button onClick={stopRecord}>Stop</button> :
                    <button onClick={startRecord}>Start</button>
            }
            {
                audioURL && <button onClick={playRecord}>Play</button>
            }
            {
                audioURL && <audio src={audioURL} controls={true} />
            }
        </div>
    )
}

export default AudioPage
