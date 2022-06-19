import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import Icon from '../components/home/icon/Icon';

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <div className={styles.root}>
      <Icon />
      <h1 className={styles["main-title"]}>Giving you the setups you need to rank up</h1>
      <button className={styles.button} onClick={e => router.push('/app')}>Open App</button>
    </div>
  )
}

export default Home
