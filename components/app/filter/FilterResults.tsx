import styles from './FilterResults.module.css';

import { useState } from 'react';

import MapSelector from './map-selector/MapSelector';


const FilterResults = () => {

    const [map, setMap] = useState('bind');
    const [showButton, setShowButton] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.map} onMouseLeave={e => setShowButton(false)} onMouseEnter={e => setShowButton(true)} style={{ backgroundImage: `url(${map}.webp)`, backgroundSize: 'cover' }}>
                {showButton &&  <MapSelector /> }
            </div>
        </div>
    )
}

export default FilterResults;