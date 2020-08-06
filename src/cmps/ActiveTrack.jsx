import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ActiveTrack(props) {
    const currTrack = useSelector(state => state.user.activeTrack)
    const [trackToRender, setTrack] = useState(null)
    const [isPlayerShown , setPlayerStatus] = useState(false)

    useEffect(() => {
        if (!currTrack) {
            setTrack(JSON.parse(localStorage.getItem('currTrack')))
        } else setTrack(currTrack)

        localStorage.setItem('currTrack', JSON.stringify(currTrack))
    }, [])

    useEffect(() => {
        console.log('Track as been changed');
    }, [trackToRender])

    function onImg(e){
        e.stopPropagation()
        setPlayerStatus(isPlayerShown => !isPlayerShown)
    }

    if (!trackToRender) return 'Loading...'
    return (
        <div className="active-track-screen flex align-center justify-center" onClick={() => props.history.push('/')}>
            <div className="active-track-modal flex column">
                <img src={trackToRender.artwork_url} onClick={onImg} />
                {isPlayerShown && <iframe
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackToRender.id}?auto_play=true`}
                    width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"></iframe>}
            </div>
        </div>
    )
}

export default ActiveTrack
