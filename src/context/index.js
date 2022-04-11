import React from 'react';

const Context = React.createContext() 

function Provider(props) {
    const [personajes, setPersonajes] = React.useState([]);

    return (
        <Context.Provider value={{
            personajes,
            setPersonajes
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider}