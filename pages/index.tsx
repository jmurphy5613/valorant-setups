import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';

import Icon from '../components/home/icon/Icon';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Icon />
      <h1 className={styles["main-title"]}>Giving you the setups you need to rank up</h1>
      <button className={styles.button}>Open App</button>
    </div>
  )
}

export default Home
