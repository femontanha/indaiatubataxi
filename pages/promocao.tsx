import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { AiOutlineArrowRight, AiOutlineWarning } from 'react-icons/ai'
import { BiSad } from 'react-icons/bi'
import { MdOutlineAirplanemodeActive, MdOutlinePayment } from 'react-icons/md'
import { getSales, TSale } from '../lib/saleSpredsheet'

import styles from './Sales.module.css'

type Props = {
  sales: [],
}

type SectionSalesProps = {
  data: [],
}

const EmptySectionSales: React.FC = () => {
  return (
    <section className={styles.section}>
      <BiSad className={styles.sectionIcon} />
      <div>
        <h3 className={styles.sectionTitle}>No momento não temos promoções</h3>
        <p className={styles.sectionText}>Fique de olho a qualquer momento pode aparecer uma promoção!</p>
      </div>
    </section>
  )
}

const SectionSales: React.FC<SectionSalesProps> = ({ data }) => {
  return (
    <>
      { data.map((item: TSale) => (
        <section key={item.date} className={styles.section}>
          <MdOutlineAirplanemodeActive className={styles.sectionIcon} />
          <ul className={styles.sectionList}>
            <li className={styles.sectionItem}>
              <span className={styles.salesLabel}>Data:</span>
              <span className={styles.salesValue}>{item.date}</span>
            </li>
            <li className={styles.sectionItem}>
              <span className={styles.salesLabel}>Horário:</span>
              <span className={styles.salesValue}>{item.initial_time} <AiOutlineArrowRight /> {item.final_time}</span>
            </li>
            <li className={styles.sectionItem}>
              <span className={styles.salesLabel}>Trajeto:</span>
              <span className={styles.salesValue}>{item.from}<AiOutlineArrowRight />{item.to}</span>
            </li>
            <li className={styles.sectionItem}>
              <span className={styles.salesLabel}>Preço:</span>
              <span className={styles.salesValue}>{item.price}</span>
            </li>
          </ul>
        </section>
      ))}
    </>
  )
}

const Sales: React.FC<Props> = (props) => {
  return (
    <div className={styles.payment}>
      <Head>
        <title>Promoções | Táxi Executivo para empresas e viagens</title>
        <meta name="description" content="Promoção para viagens taxi Indaiatuba e região."/>
		    <meta name="keywords" content="promocao,taxi,taxi indaiatuba,indaiatuba,salto,itu,guarulhos,viracopos,campinas" />
        <link rel="canonical" href="https://indaiatubataxi.com.br/promocao/" />
      </Head>
      <div className={styles.subTitleHolder}>
        <h2 className={styles.subTitle}>
          <div><span className={styles.span1}>Confira nossas</span></div>
          <div><span className={styles.highlight}>promoções.</span></div>
        </h2>
        <div className={styles.textHolder}>
          <p className={styles.text}>Faça suas viagens com segurança e qualidade.</p>
          <p className={styles.text}>Aproveite alguma de nossas promoções.</p>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.content}>
        <section className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>Atenção</h3>
            <p className={styles.sectionText}>Para agendar sua viagem promocional somente é válido para datas e horários abaixo, marcados pelo menos 3 horas antes do horário inicial.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div>
            <h3 className={styles.sectionTitle}>Formas de Pagamento</h3>
            <p className={styles.sectionText}>Todas as promoções acima são para pagamentos com dinheiro, cartão de débito, cartão de crédito ou Pix.</p>
          </div>
        </section>
        {props.sales.length !== 0 ? <SectionSales data={props.sales} /> : <EmptySectionSales />}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const sheet = await getSales()
  const rows = await sheet.getRows()
  const sales = rows.map(({
    date,
    initial_time,
    final_time,
    from,
    to,
    price
  }: TSale) => ({
    date,
    initial_time,
    final_time,
    from,
    to,
    price
  }))

  return {
    props: {
      sales,
    },
  }
}

export default Sales
