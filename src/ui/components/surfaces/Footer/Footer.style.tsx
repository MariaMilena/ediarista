import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

export const FooterStyled = styled('footer')`
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.primary.contrastText};
    padding: ${({theme}) => theme.spacing(4)} 0;
    margin-top: auto;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({theme}) => theme.spacing(2)};
    flex-wrap: wrap; // Quando a tela diminui coloca o elemento abaixo do outro
    ${({theme}) => theme.breakpoints.down('md')} {
        gap: ${({theme}) => theme.spacing(5)};
    }
`;

export const FooterTitle = styled((props) => (
    <Typography component={'h2'} variant={'body2'} {...props}/>
))`
    font-weight: bold;
`;

export const AppList = styled( 'ul')`
    display: flex; // deixa na horizontal
    list-style-type: none;
    padding: 0;
    gap: ${({theme}) => theme.spacing()}; // Como nós usamos o flex
    img {
        width: 5rem;
    }
`; // ul: elemento de lista não ordenada