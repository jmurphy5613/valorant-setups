import styles from './MapSelector.module.css';

import Popup from 'reactjs-popup';

const MapSelector = () => {



    return (
        <Popup trigger={ <button className={styles.button}>Change</button> }>

        </Popup>
    )
}

export default MapSelector;