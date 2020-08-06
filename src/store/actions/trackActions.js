export function setActiveTrack(track){
    return dispatch => {
        return dispatch({ type: 'SET_ACTIVE_TRACK', track })
    }
}
