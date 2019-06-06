import React from 'react';

//Import components
import HNStats from '../Components/HNStats/HNStats';

//Export default component
export default function HNStatsPage(props) {
    return (
        <div>
            <HNStats theme={props.theme} />
        </div>
    );
}
