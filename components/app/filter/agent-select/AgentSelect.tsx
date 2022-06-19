import styles from './AgentSelect.module.css';

type setAgent = (agent: string) => void;
type AgentSelectProps = {
    currentAgent: string,
    setAgent: setAgent
}

const AgentSelect:React.FC<AgentSelectProps> = ({ currentAgent, setAgent }) => {



    return (
        <div className={styles["agent-select"]}>
            <div className={styles["agent-container"]} onClick={e => setAgent("killjoy")}>
                <img className={styles.agent} src="/Killjoy.webp" />
                { currentAgent == "killjoy" && <div className={styles.underline} /> }
            </div>
            <div className={styles["agent-container"]} onClick={e => setAgent("cypher")}>
                <img className={styles.agent} src="/Cypher.webp" />
                { currentAgent == "cypher" && <div className={styles.underline} /> }
            </div>
        </div>
    )
}

export default AgentSelect;