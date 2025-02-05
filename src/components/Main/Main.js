import styles from './Main.module.scss'
import quadrinhos from '../../assets/Quadrinhos.png'
import sketchbook from '../../assets/Sketchbook.jpg'
import ilustracao from '../../assets/aparecida-2.png'
import animacao from '../../assets/ANIMAÇÕES.png'
import { Link } from 'react-router-dom'

const Main = () => {
   return (
      <section className={styles.container}>
         <ul >
            <li>
               <Link to='animacoes'>
                  <p>Animações</p>
                  <img src={animacao} alt='Animacao' />
               </Link>

            </li>
            <li>
               <Link to='/quadrinhos'>

                  <p>Quadrinhos</p>
                  <img src={quadrinhos} alt='Quadrinhos' /></Link>
            </li>
            <li>
               <Link to='/sketchbook' >
                  <p>Sketchbook</p>
                  <img src={sketchbook} alt='Sketchbook' />

               </Link>
            </li>
            <li>
               <Link to='/ilustracoes'>

                  <p>Ilustrações</p>
                  <img src={ilustracao} alt='Ilustracao' />
               </Link>
            </li>
         </ul>
      </section>
   )
}

export default Main