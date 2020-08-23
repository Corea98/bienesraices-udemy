import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

// Components
import Iconos from './iconos';
import Layout from './layout';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75ab00;
    }

    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 3rem;
        color: white;

        p {
            margin: 0;
        }
    }
`;

export const query = graphql`
    query($id: String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                descripcion
                wc
                estacionamiento
                habitaciones
                precio
                agente {
                    nombre
                    telefono
                    email
                }
                imagen {
                    sharp: childImageSharp {
                        fluid (maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
  
`;

const Propiedades = ({ data: { allStrapiPropiedades: { nodes } } }) => {

    const { nombre, descripcion, wc, estacionamiento, habitaciones, precio, agente, imagen } = nodes[0];

    return (
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">$ {precio}</p>
                    <Iconos
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />

                    <div className="agente">
                        <h2>Vendedor: </h2>
                        <p>{ agente.nombre }</p>
                        <p>{ agente.telefono }</p>
                        <p>{ agente.email }</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
    );
}

export default Propiedades;