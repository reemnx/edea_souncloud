import React from 'react'

function SearchHistory(props) {
    const {isHistoryModalShown,searchHistory} = props
    return (
        <div className="search-history flex align-center space-between" onClick={props.onClick}>
            <p>{searchHistory.length > 0? 'Search History' : 'History Is Empty'}</p>
            <span className={isHistoryModalShown ? 'arrow-up' : 'arrow-down'} />
            
            {(isHistoryModalShown && searchHistory.length > 0) && <div className="searches flex column">
                {searchHistory.map((searchWord, idx) => {
                    return <div className="history-item flex align-center">
                        <p>{idx + 1})</p>
                        <p>"<span>{searchWord}</span>"</p>
                        <p onClick={() => props.searchAgain(searchWord)}>Search Again</p>
                    </div>
                })}
            </div>}
        </div>
    )
}

export default SearchHistory
