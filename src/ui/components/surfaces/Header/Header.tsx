import React from 'react';
import { HeaderAppBar, HeaderLogo } from './Header.style';
import { Toolbar, Container } from '@material-ui/core';

const Header: React.FC = () => { // Header: componente funcional, ou seja, um componente foi criado usando uma função  
    return (
        <HeaderAppBar position={'sticky'}>
            <Toolbar component={Container}>
                <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
            </Toolbar>
        </HeaderAppBar>
    ); // Toolbar, onde colocamos os elementos do menu
};

export default Header;