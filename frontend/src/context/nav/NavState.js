import React, {useReducer} from 'react';
import NavContext from './navContext'
import navReducer from './navReducer'
import {NAV_OVERLAY_OPEN, PROJECTS_EXPANDED} from '../types'

const NavState = props => {

    const initialState = {
        navOpen: false,
        projectsExpanded: false
    }

    const [state, dispatch] = useReducer(navReducer, initialState)

    // Open Mobile Nav
    const mobileNavAction = (navAction) => {

        console.log(`navAction -> ${navAction}`)

        dispatch({
            type: NAV_OVERLAY_OPEN,
            payload: navAction
        })
    }

    return (
        <NavContext.Provider
            value={{
                projectsExpanded: state.projectsExpanded,
                navOpen: state.navOpen,
                mobileNavAction
            }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavState;