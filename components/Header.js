import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import { ApeDaoContext } from '../context/context'
import Image from 'next/image'

const Header = () => {
  const { disconnectWallet } = useContext(ApeDaoContext)
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        ApeCoin DAO{' '}
        <Image
          className='logo'
          height={80}
          width={80}
          src={
            'https://cdn.stamp.fyi/space/apecoin.eth?s=160&cb=ec19915e02892e80'
          }
        />
      </div>
      <button className={styles.disconnectBtn} onClick={disconnectWallet}>
        Disconnect Wallet 👋
      </button>
    </div>
  )
}

export default Header
