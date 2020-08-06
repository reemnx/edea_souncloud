import React from 'react'
import TrackPreview from '../cmps/TrackPreview'

function TrackList(props) {
    const {tracks} = props
    return (
       <React.Fragment>
           {tracks.map((track,idx)=>{
               return <TrackPreview onPlayTrack={props.onPlayTrack} track={track} key={idx} />
           })}
       </React.Fragment>
    )
}

export default TrackList
