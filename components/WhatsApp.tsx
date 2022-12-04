import { AiOutlineWhatsApp } from 'react-icons/ai';
import styles from './Whatsapp.module.css'

const WhatsApp: React.FC = () => {
  return (
    <div className={styles.whatsapp}>
      Para agendamento ou dúvidas
      <a href="https://wa.me/+5519991550069" className={styles.link} rel="noreferrer" target={'_blank'}>
        <AiOutlineWhatsApp />
        Whatsapp
      </a>
    </div>
  )
}

export default WhatsApp
