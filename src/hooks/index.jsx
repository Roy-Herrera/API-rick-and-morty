import React, { useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context';

const useGetPer = (API) => {
	const {
		personajes, 
		setPersonajes
	} = React.useContext(Context)
    
	useEffect(() => {
		
		async function fetchApi() {
			const response = await axios(API);
			setPersonajes(response.data);
		}
		fetchApi()
	}, [])
	return personajes
};

export default useGetPer