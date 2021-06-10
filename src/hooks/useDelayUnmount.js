import React, {useState, useEffect} from 'react'

const useDelayUnmount = (isMounted, delayTime) => {

    const [showDiv, setShowDiv] = useState(false)
    useEffect(() => {
        let timeoutId;
        if(isMounted && !showDiv) {
          setShowDiv(true);
        } else if (!isMounted && showDiv) {
          timeoutId = setTimeout(() => setShowDiv(false), delayTime);
        }
    
        return () => clearTimeout(timeoutId)
      }, [isMounted, delayTime, showDiv]);
    
      return showDiv;
}

export default useDelayUnmount
