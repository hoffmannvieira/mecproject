import styles from './About.module.scss'
import aboutme from '../../assets/MEC.png'


const About = () => {
    return (
        <section className={styles.container}>
             <h2>Sobre Mim</h2>
            <div>
            <p>Olá! Eu sou Lucas, artista profissional atuante na área de animação.Eu já dirigi projetos pessoais como meu curta premiado O Homem e o Pássaro e animações independentes para o canal de clipes infantis Minha turminha e hoje trabalho como animador 2D na Viu Cine Studio. Também faço ilustrações e designs de personagens com curiosidade de expandir para outros campos da animação e gosto muito de criar e apresentar minhas ideias.</p>
            </div>
            
            <img src={aboutme} alt='Teste Mec' />
        </section>
    )
}

export default About