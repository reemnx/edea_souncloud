//React Imports
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
//Store Imports
import { setActiveTrack } from '../store/actions/trackActions'
//Libs Imports
import axios from 'axios'
//Cmps
import ActiveTrack from '../cmps/ActiveTrack'
import SearchHistory from '../cmps/SearchHistory'
import ResultsContainer from '../cmps/ResultsContainer'
import ResultsOptions from '../cmps/ResultsOptions'


function Home(props) {
    const initSearchWord = 'Michael Jackson'
    const dispatch = useDispatch()
    const [searchParam, setSearchParam] = useState(initSearchWord)
    const [tracks, setTracks] = useState([])
    const [searchHistory, setSearchHistory] = useState([])
    const [isListView, toggleListView] = useState(true)
    const [offset, setOffset] = useState(0)
    const [isHistoryModalShown, toggleHistoryModal] = useState(false)

    useEffect(() => {

        if(localStorage.getItem('layout')) toggleListView(JSON.parse(localStorage.getItem('layout')))

        if (localStorage.getItem('searchHistory')) {
            setSearchHistory(JSON.parse(localStorage.getItem('searchHistory')))
        }

    }, [])

    useEffect(() => {
        onSearch()

    }, [offset])

    useEffect(() => {
        localStorage.setItem('layout' , JSON.stringify(isListView))
    }, [isListView])

    async function onSearch(searchWord='') {
        if (!searchParam) return
        updateSearchHistory()
        try {
            let tracksToSet = await 
            axios.get(`https://api.soundcloud.com/tracks?linked_partitioning=&client_id=ggX0UomnLs0VmW7qZnCzw&offset=${offset}&q=${searchWord? searchWord : searchParam}&limit=6`)
            setTracks(tracksToSet.data.collection)
        } catch (err) {
            console.log('There is an error to fetch tracks:', err);
        }
    }

    function updateSearchHistory() {
        if (searchParam === initSearchWord) return
        if (searchHistory.length === 5) {
            searchHistory.splice(4, 1);
        }
        searchHistory.unshift(searchParam)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    }

    function onInput({ target }) {
        setSearchParam(target.value)
    }

    function onNextPage() {
        setOffset(offset => offset + 6)
    }

    function onHistory() {
        if (!searchHistory.length) return
        toggleHistoryModal(isHistoryModalShown => !isHistoryModalShown)
    }

    function searchAgain(searchWord) {
        setSearchParam(searchWord)
        onSearch(searchWord)
    }

    function onPlayTrack(track) {
        dispatch(setActiveTrack(track))
        props.history.push(`/track/${track.id}`)
    }

    return (
        <>
            <div className="home-container flex justify-center">
                <div className="content-wraper content flex column">

                    <div className="search-box flex align-center space-between">

                        <div className="flex align-center">
                            <input type="text" placeholder="What whould you like to hear?" value={searchParam} onInput={onInput} />
                            <button onClick={onSearch}>Go</button>
                        </div>

                        < SearchHistory
                            onClick={onHistory}
                            isHistoryModalShown={isHistoryModalShown}
                            searchHistory={searchHistory}
                            searchAgain={searchAgain} />
                    </div>

                    {tracks.length > 0 && <ResultsContainer
                        isListView={isListView}
                        searchParam={searchParam}
                        tracks={tracks}
                        onPlayTrack={onPlayTrack} />}

                    {tracks.length > 0 && <ResultsOptions onNextPage={onNextPage} toggleListView={toggleListView} />}

                </div>
            </div>

            {/* Nest route to show active song while home in background */}
            <Switch>
                <Route component={ActiveTrack} path="/track/:id" />
            </Switch>
        </>
    )
}

export default Home
