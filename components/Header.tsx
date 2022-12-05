import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames/bind'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import styles from './Header.module.css'

let cx = classNames.bind(styles);

const Header: React.FC = () => {
  const router = useRouter()
  const dynamicRoute = router.asPath
  const [ mobileMenuIsVisible, setMobileMenuIsVisible ] = useState(false)

  let navClassName = cx({
    nav: true,
    isVisible: mobileMenuIsVisible,
  });

  useEffect(() => {
    setMobileMenuIsVisible(false)
  }, [dynamicRoute])

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.titleName}>Indaiatuba</span>
        <span className={styles.titleSubname}>Táxi</span>
      </h1>
      <button className={styles.navOpen} onClick={() => setMobileMenuIsVisible(true)}><GiHamburgerMenu /></button>
      <nav className={navClassName}>
        <button className={styles.navClose} onClick={() => setMobileMenuIsVisible(false)}><AiOutlineClose /></button>
        <ul className={styles.list}>
          <li>
            <Link href="/" className={router.pathname == "/" ? styles.linkActive : styles.link}>Home</Link>
          </li>
          <li>
            <Link href="/tipos-de-pagamento" className={router.pathname == "/tipos-de-pagamento" ? styles.linkActive : styles.link}>Tipos de pagamento</Link>
          </li>
          <li>
            <Link href="/promocao" className={router.pathname == "/promocao" ? styles.linkActive : styles.link}>Promoção</Link>
          </li>
          <li>
            <Link href="/contato" className={router.pathname == "/contato" ? styles.linkActive : styles.link}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
