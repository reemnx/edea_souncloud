import React from 'react'

function ResultsOptions(props) {
    return (
        <div className="results-options flex align-center space-between">
            <span className="next" onClick={props.onNextPage} />

            <div className="flex align-center">
                <span className="list-btn" onClick={() => props.toggleListView(true)} />
                <span className="tile-btn" onClick={() => props.toggleListView(false)} />
            </div>
        </div>
    )
}

export default ResultsOptions
