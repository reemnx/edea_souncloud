import React from 'react'
import TrackList from '../cmps/TrackList'

function ResultsContainer(props) {
    const {searchParam,isListView,tracks} = props
    return (
        <div className="search-results-container">
            <h4>Search Results for: "<span>{searchParam}</span>"</h4>
            <div className={isListView ? 'list' : 'tile'}>
                <TrackList onPlayTrack={props.onPlayTrack} tracks={tracks} />
            </div>
        </div>
    )
}

export default ResultsContainer
