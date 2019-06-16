import React, { useEffect } from 'react';

//Import components
import HNStats from '../Components/HNStats/HNStats';

//Export default component
export default function HNStatsPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <HNStats theme={props.theme} />
        </div>
    );
}
