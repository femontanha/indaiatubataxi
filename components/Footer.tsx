import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      Desenvolvido por
      <a href="https://www.instagram.com/fellipeazambuja/" rel="noreferrer" target={'_blank'} className={styles.link}>@femontanha</a>
    </footer>
  )
}

export default Footer
