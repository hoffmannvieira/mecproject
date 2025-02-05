import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className={styles.container}>
           <div className={styles.teste}>
           </div>
            <div className={styles.header}>
                <div>
                <Link to='/'><h1>Lucas Piedade</h1></Link>
                
                <p>Artista 2D</p>
                <hr></hr>
                </div>
                <Navbar />
            </div>
        </header>
    )
}
    
export default Header