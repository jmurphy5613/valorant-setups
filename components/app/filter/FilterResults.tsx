import styles from './FilterResults.module.css';

import { useState } from 'react';


const FilterResults = () => {

    const [map, setMap] = useState('bind');

    return (
        <div className={styles.root}>
            <div className={styles.map} style={{ backgroundImage: `url(${map}.webp)`, backgroundSize: 'cover' }}>
                
            </div>
        </div>
    )
}

export default FilterResults;