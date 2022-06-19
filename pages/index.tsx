import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';

import Icon from '../components/home/icon/Icon';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Icon />
    </div>
  )
}

export default Home
