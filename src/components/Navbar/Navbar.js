import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'


const Navbar = () => {
    return (
        <nav>
            <ul className={styles.navbar_list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre mim</Link>
                </li>
                <li>
                    <Link to='/curriculo'>Curriculo</Link>
                </li>
                {/* <li>
                    <Link to='/contato'>Contato</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar