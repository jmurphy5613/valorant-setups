import styles from './FilterResults.module.css';

import { useState } from 'react';

import MapSelector from './map-selector/MapSelector';
import AgentSelect from './agent-select/AgentSelect';
import SiteSelector from './site-selector/SiteSelector';


const FilterResults = () => {

    const [map, setMap] = useState('bind');
    const [agent, setAgent] = useState('killjoy');
    const [site, setSite] = useState('A');
    const [showButton, setShowButton] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.map} onMouseLeave={e => setShowButton(false)} onMouseEnter={e => setShowButton(true)} style={{ backgroundImage: `url(${map}.webp)`, backgroundSize: 'cover' }}>
                {showButton &&  <MapSelector /> }
            </div>
            <AgentSelect currentAgent={agent} setAgent={setAgent} />
            <SiteSelector setSite={setSite} currentSite={site} />
        </div>
    )
}

export default FilterResults;