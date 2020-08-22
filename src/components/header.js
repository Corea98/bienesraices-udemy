import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

// Componentes
import Navegacion from './navegacion';

const Header = () => {

    // Consultar logo.segmentActive
    const { logo } = useStaticQuery(graphql`
        query {
            logo: file (relativePath: {eq: "logo.svg"}) {
                id
                publicURL
            }
        }
    `);

    return (
        <header css={css`
            background-color: #0d283b;
            padding: 1rem;
        `}>
            <div className="contenedor" css={css`
                text-align: center;

                @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}>
                <Link to="/">
                    <img src={logo.publicURL} alt="Logotipo bienes raices" />
                </Link>

                <Navegacion />
            </div>
        </header>
    );
}
 
export default Header;