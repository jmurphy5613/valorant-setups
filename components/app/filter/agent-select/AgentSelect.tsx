import styles from './AgentSelect.module.css';


const AgentSelect = () => {
    return (
        <div className={styles["agent-select"]}>
            <div className={styles["agent-container"]}>
                <img className={styles.agent} src="/Killjoy.webp" />
                <div className={styles.underline} />
            </div>
            <div className={styles["agent-container"]}>
                <img className={styles.agent} src="/Cypher.webp" />
                <div className={styles.underline} />
            </div>
        </div>
    )
}

export default AgentSelect;