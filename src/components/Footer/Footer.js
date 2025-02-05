import { BiCopyright } from 'react-icons/bi'
import styles from './Footer.module.scss'


const Footer = () => {
    return (
       <footer className={styles.container} >
        <div className={styles.teste}>
        <div className={styles.footer}>
            <div>
            <h2>Direitos Reservados</h2>
            <a href="https://github.com/hoffmannvieira" target="_blank">Vinícius Hoffmann Vieira <BiCopyright/> </a>
            </div>
        </div>
        </div>
       </footer>

    )
}

export default Footer