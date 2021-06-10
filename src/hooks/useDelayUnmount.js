import React, {useEffect, useState, useContext} from 'react'
import NavContext from '../context/nav/navContext'



const useDelayUnmount = (time=1600) => {

    const navContext = useContext(NavContext);
    const {testNavOpen, testMobileNavAction} = navContext;

    // const [state, setState] = setState('unmounted');

    const show = () => {
        if(testNavOpen === "unmounting") {
            return
        }

        testMobileNavAction("mounting")
    }

    const hide = () => {
        if(testNavOpen === "mounting") {
            return
        }

        testMobileNavAction("unmounting")
    }



    useEffect(() => {
        let timeoutId;


        if(testNavOpen === "unmounting") {
            timeoutId = setTimeout(() => {
                testMobileNavAction("unmounted")
            }, time)
        } else if (testNavOpen === "mounting"){
            
            timeoutId = setTimeout(() =>  testMobileNavAction("mounted"), time)
        }

        return () => clearTimeout(timeoutId)
        
    }, [testNavOpen, time])

    return [testNavOpen, show, hide]
}

export default useDelayUnmount
