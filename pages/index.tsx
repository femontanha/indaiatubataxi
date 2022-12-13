import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Táxi Executivo para empresas e viagens</title>
      </Head>
      <div className={styles.subTitleHolder}>
        <h2 className={styles.subTitle}>
          <div><span className={styles.span1}>Táxi Executivo.</span></div>
          <div><span className={styles.span2}>Para</span><span className={styles.span3}>empresas</span></div>
          <div><span className={styles.span4}>e</span><span className={styles.span5}>viagens.</span></div>
        </h2>
        <div className={styles.textHolder}>
          <p className={styles.text}>Faça suas viagens com segurança e qualidade.</p>
          <p className={styles.text}>Táxi executivo para o Aeroporto de Viracopos, Guarulhos - GRU, Congonhas e região</p>
        </div>
      </div>
      <div className={styles.separator}></div>
      <section className={styles.banner}>
        <Banner />
      </section>
      <div className={styles.content}>
        <section>
          <Image
            className={styles.image}
            src="/cars.jpg"
            alt="Nossos carros"
            width={1600}
            height={1200}
            priority
          />
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Transporte com qualidade, segurança e pontualidade.</h3>
          <p className={styles.sectionText}>Somos uma equipe de motoristas de taxi profissionais, cadastrado na prefeitura da cidade. Cada motorista trabalha com seu veiculo, no sistema de parceria.</p>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Aeroportos</h3>
          <p className={styles.sectionText}>Levar e buscar passageiros nos Aeroportos<br /> Por exemplo nos aeroportos de Guarulhos, Congonhas, Viracopos.</p>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Exterior</h3>
          <p className={styles.sectionText}>Levar e buscar passageiros nos Aeroportos<br /> Por exemplo nos aeroportos de Guarulhos, Congonhas, Viracopos.</p>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Metrópole</h3>
          <p className={styles.sectionText}>Conhecimento das principais ruas de São Paulo, Campinas e região.</p>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Hotéis</h3>
          <p className={styles.sectionText}>Conhecimento dos principais hotéis da região.</p>
        </section>
      </div>
    </div>
  )
}
export default Home
