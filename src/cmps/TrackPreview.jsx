import React from 'react'
import utils from '../services/utils'

function TrackPreview(props) {
    const { track } = props

    function substrMax60(str) {
        const shortenStr = str.substring(0, 60)
        return shortenStr + " " + "..."
    }

    return (
        <div className="track-preview" >
            <img src={(track.artwork_url)? track.artwork_url : 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'} />

            <div className="track-info">

                <div>
                    <p>{track.user.username}</p>
                    <h5>{track.title.length > 60 ? substrMax60(track.title) : track.title}</h5>
                </div>

                <div className="track-tags">

                    <div className="flex align-center">
                        <span className="repeat" />
                        <p style={{ color: '#9a9c9b' }}>{utils.abbreviateNumber(track.playback_count)}</p>
                    </div>

                    <div className="flex align-center">
                        <span className="downloads" />
                        <p style={{ color: '#9a9c9b' }}>{utils.abbreviateNumber(track.download_count)}</p>
                    </div>

                    <div className="flex align-center">
                        <span className="star" />
                        <p style={{ color: '#9a9c9b' }}>{utils.abbreviateNumber(track.favoritings_count)}</p>
                    </div>

                </div>
            </div>
            <button onClick={() => props.onPlayTrack(track)}>Play Me</button>
        </div>
    )
}

export default TrackPreview
