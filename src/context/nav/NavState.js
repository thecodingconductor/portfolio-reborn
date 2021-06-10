import React, {useReducer} from 'react';
import NavContext from './navContext'
import navReducer from './navReducer'
import {NAV_OVERLAY_OPEN, PROJECTS_EXPANDED} from '../types'

const NavState = props => {

    const initialState = {
        navOpen: false,
        // testNavOpen: "unmounted",
        projectsExpanded: false
    }

    const [state, dispatch] = useReducer(navReducer, initialState)

    // Open/Close Mobile Nav
    const mobileNavAction = (navAction) => {

        dispatch({
            type: NAV_OVERLAY_OPEN,
            payload: navAction
        })
    }

    // const testMobileNavAction = (navAction) => {

    //     dispatch({
    //         type: NAV_OVERLAY_OPEN,
    //         payload: navAction
    //     })
    // }

    // Open/Close Projects expand
    const expandProjects = (projectsAction) => {
        

        dispatch({
            type: PROJECTS_EXPANDED,
            payload: projectsAction
        })
    }

    return (
        <NavContext.Provider
            value={{
                projectsExpanded: state.projectsExpanded,
                navOpen: state.navOpen,
                mobileNavAction,
                expandProjects
            }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavState;