import styles from './AgentSelect.module.css';


const AgentSelect = () => {
    return (
        <div className={styles["agent-select"]}>
            <img className={styles.agent} src="/Killjoy.webp" />
            <img className={styles.agent} src="/Cypher.webp" />
        </div>
    )
}

export default AgentSelect;