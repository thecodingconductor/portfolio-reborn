import {NAV_OVERLAY_OPEN, PROJECTS_EXPANDED} from '../types'

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type) {

        case NAV_OVERLAY_OPEN:
            return {
                ...state,
                navOpen: action.payload
            };
        case PROJECTS_EXPANDED:
            return {
                ...state,
                projectsExpanded: action.payload
            };
        default:
            return state;
    }
}