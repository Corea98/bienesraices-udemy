import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categorias {
                        nombre
                    }
                    agente {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid (maxWidth: 600, maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }  
            }
        }
    `);

    return(datos.allStrapiPropiedades.nodes);
}

export default usePropiedades;