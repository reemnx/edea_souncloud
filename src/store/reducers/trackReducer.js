const initialState = {
    activeTrack: null
}

export function trackReducer(state = initialState, action) {

    switch (action.type) {
        
        case 'SET_ACTIVE_TRACK':
            return {
                ...state,
                activeTrack: action.track
            }
        default:
            return state;
    }
}

