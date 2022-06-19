import styles from '../styles/App.module.css';

import Logo from '../components/app/icon/Icon';
import FilterResults from '../components/app/filter/FilterResults';
import Navbar from '../components/navbar/Navbar';


const App = () => {
    return (
        <div className={styles.root}>
            <Navbar />
            <Logo />
            <FilterResults />
        </div>
    )
}

export default App;