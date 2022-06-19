import styles from './SiteSelector.module.css';

type setSite = (site:string) => void;
type SiteSelectorProps = {
    currentSite: string,
    setSite: setSite
}

const SiteSelector:React.FC<SiteSelectorProps> = ({ currentSite, setSite }) => {



    return (
        <div className={styles.root}>
            {currentSite == 'A' ? <div className={styles["selected-button"]}>A</div> : <div onClick={e => setSite('A')} className={styles["button"]}>A</div>}
            {currentSite == 'B' ? <div className={styles["selected-button"]}>B</div> : <div onClick={e => setSite('B')} className={styles["button"]}>B</div>}
            {currentSite == 'C' ? <div className={styles["selected-button"]}>C</div> : <div onClick={e => setSite('C')} className={styles["button"]}>C</div>}
        </div>
    )
}

export default SiteSelector;