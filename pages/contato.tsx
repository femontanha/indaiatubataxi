import Head from 'next/head'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

import styles from './Contact.module.css'

const Contact: React.FC = () => {
  return (
    <div className={styles.payment}>
      <Head>
        <title>Contato | Táxi Executivo para empresas e viagens</title>
        <meta name="description" content="Celular, Whatsapp, Email e mais."/>
		    <meta name="keywords" content="taxi indaiatuba,taxi campinas,taxi viracopos,taxi guarulhos,vai de taxi,taxi" />
		    <link rel="canonical" href="https://indaiatubataxi.com.br/contato/" />
      </Head>
      <div className={styles.subTitleHolder}>
        <h2 className={styles.subTitle}>
          <div><span className={styles.span1}>Entre em</span></div>
          <div><span className={styles.highlight}>contato.</span></div>
        </h2>
        <div className={styles.textHolder}>
          <p className={styles.text}>Faça suas viagens com segurança e qualidade.</p>
          <p className={styles.text}>Veja abaixo nossos contatos.</p>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.content}>
        <section className={styles.section}>
          <AiOutlineWhatsApp className={styles.sectionIcon} />
          <div>
            <h3 className={styles.sectionTitle}>Whatsapp</h3>
            <p className={styles.sectionText}>Nosso número: <a href="https://wa.me/+5519991550069" rel="noreferrer" target={'_blank'}>19 99115-0069</a></p>
          </div>
        </section>
        <section className={styles.section}>
          <AiOutlineMail className={styles.sectionIcon} />
          <div>
            <h3 className={styles.sectionTitle}>Email</h3>
            <p className={styles.sectionText}>Nosso endereço: <a href="mailto:indaiataxi@gmail.com" rel="noreferrer" target={'_blank'}>indaiataxi@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
