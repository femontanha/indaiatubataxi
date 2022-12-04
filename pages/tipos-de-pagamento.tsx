import Head from 'next/head'
import { MdQrCode2 } from 'react-icons/md'
import { AiFillCreditCard } from 'react-icons/ai'
import { BsCashStack } from 'react-icons/bs'
import { AiOutlineBarcode } from 'react-icons/ai'

import styles from './Payment.module.css'

const Payments: React.FC = () => {
  return (
    <div className={styles.payment}>
      <Head>
        <title>Tipos de Pagamento | Táxi Executivo para empresas e viagens</title>
      </Head>
      <div className={styles.subTitleHolder}>
        <h2 className={styles.subTitle}>
          <div><span className={styles.span1}>Tipos de</span></div>
          <div><span className={styles.highlight}>pagamento.</span></div>
        </h2>
        <div className={styles.textHolder}>
          <p className={styles.text}>Faça suas viagens com segurança e qualidade.</p>
          <p className={styles.text}>Aceitamos várias formas de pagamento.</p>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.content}>
        <section className={styles.section}>
          <AiFillCreditCard className={styles.sectionIcon} />
          <div>
            <h3 className={styles.sectionTitle}>Cartões</h3>
            <p className={styles.sectionText}>Visa, Mastercard, American Express, Soro Cred, Elo, Diners Club, Agiplan, Aura, Banes Card, Cabal, Mais!, Hipercard, Discover, Credz</p>
          </div>
        </section>
        <section className={styles.section}>
          <MdQrCode2 className={styles.sectionIcon} />
          <div>
            <h3 className={styles.sectionTitle}>Pix</h3>
            <p className={styles.sectionText}>Pagamento à vista</p>
          </div>
        </section>
        <section className={styles.section}>
          <BsCashStack className={styles.sectionIcon} />
          <div>
            <h3 className={styles.sectionTitle}>Dinheiro</h3>
            <p className={styles.sectionText}>Pagamento à vista</p>
          </div>
        </section>
        <section className={styles.section}>
          <AiOutlineBarcode className={styles.sectionIcon} />
          <div>
            <h3 className={styles.sectionTitle}>Boleto Quinzenal</h3>
            <p className={styles.sectionText}>Somente empresas</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Payments
