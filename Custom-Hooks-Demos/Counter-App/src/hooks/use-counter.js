import { useEffect, useState } from "react";

const useCounter = (forwards = true) => { //starting with use is an obligation
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter(prevCounter => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
}

export default useCounter;
