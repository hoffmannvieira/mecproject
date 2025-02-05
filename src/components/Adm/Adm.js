import { useState } from 'react'
import styles from './Adm.module.scss'
import Message from '../Message/Message'
import { v4 as uuidv4 } from 'uuid';


const Adm = ({ artes }) => {
    const [item, setItem] = useState([])
    const [arte, setArte] = useState(artes || {})
    const option = ['animacao', 'quadrinhos', 'sketchbook', 'ilustracoes', 'print']
    const [options, setOptions] = useState(option)
    const [message, setMessage] = useState('')
    const [messageDelete, setMessageDelete] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(arte)
    }

    const handleChange = (e) => {
        setArte({ ...arte, [e.target.name]: e.target.value })
      

    }

    const handleSelect = (e) => {
        setOptions(e.target.value)
    }



    const mostrarDados = () => {
        fetch(`http://localhost:8000/${options}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resposta) => resposta.json())
            .then((dados) => {
                setItem(dados)
            }).catch((e) => console.log(e))
    }



    function createPost(arte) {
        arte.id = uuidv4()
        fetch(`http://localhost:8000/${options}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(arte)
        }).then((resposta) => resposta.json())
            .then((dados) => {
                console.log(dados)
                setMessage('Arte enviada')

            }).catch((e) => console.log(e))
    }

    const removerArte = (id) => {
        fetch(`http://localhost:8000/${options}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json()).then(() => {
            setItem(item.filter((e) => e.id !== id))
            setMessageDelete('Arte excluída')
        })
    }


    return (

        <>
            <div className={styles.titulo}>
                <h1>Administração</h1>
            </div>
            {message && <Message type='success' msg={message} />}
            {messageDelete && <Message type='error' msg={messageDelete} />}
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Nome Imagem</label>
                <input type='text' name='name' placeholder='Insira o nome da Imagem' value={arte.name} onChange={handleChange} />
                <label>URL IMAGEM</label>
                <input type='text' name='img' placeholder='Insira o URL da imagem' value={arte.img} onChange={handleChange} />
                <select name={options} onChange={handleSelect} value={options}>
                    <option>Selecione uma opção</option>
                    {option.map((option) => (
                        <option value={option} key={option.id}>{option}</option>
                    ))}
                </select>
                <button type='submit'>Enviar</button>
            </form>
            <div className={styles.tabela}>
            <select name={options} onChange={handleSelect} value={options}>
                <option>Selecione uma opção</option>
                {option.map((option) => (
                    <option value={option} key={option.id}>{option}</option>
                ))}
            </select>
            <button type='button' onClick={mostrarDados}>Mostrar</button>
            {item.map((e) => (
                <div className={styles.tabela_table}>
                    <h2>{e.name}</h2>
                    <h2>{e.img}</h2>
                    <button onClick={() => removerArte(e.id)}>X - Deletar</button>
                </div>
            ))}
            </div>

        </>
    )
}

export default Adm 