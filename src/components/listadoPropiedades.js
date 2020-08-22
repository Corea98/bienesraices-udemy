import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import usePropiedades from '../hooks/usePropiedades';

// Modulos
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';

// Components
import PropiedadPreview from '../components/propiedadPreview';

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    // console.log(propiedades);

    // states
    const [ propiedades, setPropiedades ] = useState([]);

    useEffect(() => {
        setPropiedades(resultado);
    }, []);

    return (
        <>
        <h2 css={css`
            margin-top: 5rem;
        `}>Nuestras propiedades</h2>

        <ul className={listadoPropiedadesCSS.propiedades}>
            {propiedades.map( propiedad => (
                <PropiedadPreview 
                    key={propiedad.id}
                    propiedad={propiedad}
                />
            ))}
        </ul>
        </>
    );
}
 
export default ListadoPropiedades;