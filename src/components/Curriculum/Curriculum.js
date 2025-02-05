import styles from './Curriculum.module.scss'
import curriculo from '../../assets/CURRICULO-LUCAS-PIEDADE-2024.png'

const Curriculum = () => {
    return (
        <section className={styles.container}>
                <img src={curriculo} alt='Curriculo Mec'/>
        </section>
    )
}

export default Curriculum