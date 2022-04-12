import React, { useEffect } from 'react';
import PersonajeItem from '../components/PersonajeItem'
import '../styles/PersonajeList.css'
import {Button} from 'react-bootstrap';
import useGetPer from '../hooks/index';
import { Context } from '../context';
import axios from 'axios';

const API = 'https://rickandmortyapi.com/api/character/'

const PersonajeList = () => {
    const [anteriorBoton, setAnteriorBoton] = React.useState(false);
    const [siguienteBoton, setSiguienteBoton] = React.useState(false);
    const [paginas, setPaginas] = React.useState(1)


    useGetPer(API)

    const { 
        personajes,
        setPersonajes
	} = React.useContext(Context)

    useEffect(() => {
        if(personajes.info?.pages === paginas)
        {
            setSiguienteBoton(true)
        } else {
            setAnteriorBoton(false)
        }
        if(paginas === 1) {
            setAnteriorBoton(true)
        }
    }, [paginas])

    function siguiente() {
        if(personajes.info.next != null) {
            setAnteriorBoton(true)
            setSiguienteBoton(true)
            setTimeout(async () => {
                const response = await axios (personajes.info.next)
                setPersonajes(response.data)
                setAnteriorBoton(false)
                setSiguienteBoton(false)
                setPaginas(paginas + 1)
            }, 1000)
        }
    }

    function anterior() {   
        if(personajes.info.prev != null) {
            setSiguienteBoton(true)
            setAnteriorBoton(true)
            setTimeout(async () => {
                const response = await axios (personajes.info.prev)
                setPersonajes(response.data)
                setSiguienteBoton(false)
                setAnteriorBoton(false)
                setPaginas(paginas - 1)
            }, 1000)
        }        
    }

    return (
        <React.Fragment>
            <div className="cambios"> 
                <Button variant="outline-warning" onClick={anterior} disabled={anteriorBoton}>Anterior</Button>
                <h1 className="Titulo">Rick And Morty.</h1>
                <Button variant="outline-warning" onClick={siguiente} disabled={siguienteBoton}>Siguiente</Button>
            </div>
            <div className="PersonajeIndividual" >
                {personajes.results?.map(personajeInd => (
                    <PersonajeItem personajeInd={personajeInd} key={personajeInd.id}/>
                ))}
            </div>
        </React.Fragment>
    )
}

export default PersonajeList