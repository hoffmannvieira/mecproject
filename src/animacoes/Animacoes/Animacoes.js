import styles from './Animacoes.module.scss'

import { useState, useEffect } from 'react'

import Modal from 'react-modal'
import Adm from '../../components/Adm/Adm'
// Verificar a responsividade dos elementos

const Animacoes = ({ caminhoApi }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [image, setImage] = useState('')

    const abrirModal = (imagem) => {
        setImage(imagem)
        setModalOpen(!modalOpen)
    }

    const closeModal = () => {
        setImage('')
        setModalOpen(false)
    }


    const [artes, setArtes] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8000/${caminhoApi}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resposta) => resposta.json())
            .then((dados) => {
                setArtes(dados)
            }).catch((e) => console.log(e))
    }, [])

    return (
        <>
            {'' && <Adm artes={artes} />}
            <div className={styles.container}>
                {caminhoApi === 'animacao' ? (artes.map((video) => (
                    <ul className={styles.container_lista}>
                        <li key={video.id}  >
                            <iframe width="560" height="315" src={video.img} title={video.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </li>
                    </ul>
                ))) : (artes.map((arte) => (
                    <>
                        <ul className={styles.container_lista}>
                            <li key={arte.id} onClick={() => abrirModal(arte.img)} >
                                <img src={arte.img} alt={arte.name} />
                            </li>
                        </ul>
                        <Modal
                            isOpen={modalOpen}
                            onRequestClose={closeModal}
                            contentLabel='Imagem Tela Cheia'
                            className={styles.fullScreen_Modal}
                            overlayClassName={styles.overlay}
                        >
                            <button onClick={closeModal} >X</button>
                            <img src={image} alt='Imagem Ampliada' />
                        </Modal>
                    </>
                )))}
            </div>
        </>
    )
}

export default Animacoes