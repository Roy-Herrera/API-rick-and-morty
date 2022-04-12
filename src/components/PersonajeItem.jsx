import React from 'react';
import {Card} from 'react-bootstrap';

const PersonajeItem = ({personajeInd}) => {
	return (
		<Card style={{ width: '18rem' }} className='justify-content-center' key={personajeInd.id}>
			<Card.Img variant="top" src={personajeInd.image} style={{ width: '100%' }}/>
			<Card.Body className='descripcion'>
				<Card.Title>Nombre: {personajeInd.name}</Card.Title>
				<Card.Text>Especie: {personajeInd.species}; Genero: {personajeInd.gender}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default PersonajeItem;