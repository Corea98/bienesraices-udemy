import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import usePropiedades from '../hooks/usePropiedades';

// Modulos
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';

// Hooks
import useFiltro from '../hooks/useFiltro';

// Components
import PropiedadPreview from '../components/propiedadPreview';

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [ propiedades, setPropiedades ] = useState([]);

    // Filtrado de propiedades
    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        setPropiedades( 
            categoria ?
                resultado.filter(propiedad => (propiedad.categorias.nombre === categoria))
            :
                resultado
        );

        
    }, [categoria]);

    return (
        <>
        <h2 css={css`
            margin-top: 5rem;
        `}>Nuestras propiedades</h2>

        {FiltroUI()}

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