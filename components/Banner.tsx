import Link from 'next/link'
import { TbZoomMoney } from 'react-icons/tb'
import styles from './Banner.module.css'

const Banner: React.FC = () => {
  return (
    <Link href="/promocao" className={styles.link}>
      <TbZoomMoney className={styles.icon} />
      <span>
        Vai viajar em breve? Dê uma olhada nas nossas promoções
      </span>
    </Link>
  )
}

export default Banner
