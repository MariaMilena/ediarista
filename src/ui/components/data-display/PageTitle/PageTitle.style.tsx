import { styled } from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
    // margin: 40px 0; // 1° valor vertical, 2° valor horizontal
    margin: ${({theme}) => theme.spacing(5) + ' ' + 0}; // 8px de distância
    text-align: center;
`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    color: ${({theme}) => theme.palette.primary.main};  // propriedades do material ui
    font-size: ${({theme}) => theme.typography.h6.fontSize};
    font-weight: 600;

    ${({theme}) => theme.breakpoints.down('md')}{ // Uma estilização diferente quando a tela diminui para um tamanho médio
        font-size: ${({theme}) => theme.typography.body1.fontSize};
    }
`;

export const PageSubtitleStyled = styled('h3')`
    margin: ${({theme}) => theme.spacing(1.5) + ' ' + 0};
    color: ${({theme}) => theme.palette.text.primary};
    font-size: ${({theme}) => theme.typography.body1.fontSize};
    font-weight: normal;

    ${({theme}) => theme.breakpoints.down('md')}{
        font-size: ${({theme}) => theme.typography.body2.fontSize};
    }
`;