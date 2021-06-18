import { Paper } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';

export const FormElementsContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.spacing(5)};
    max-width: 650px;
    margin: 0 auto ${({theme}) => theme.spacing(7)}; // 1° margens de cima, 2° margens laterais(auto = mesma margem em ambos os lados, ou seja, centralizado), 3° margens debaixo
`;

export const ProfissionaisPaper = styled(Paper)`
    padding: ${({theme}) => theme.spacing(7)};
    margin: 0 auto ${({theme}) => theme.spacing(10)};

    ${({theme}) => theme.breakpoints.down('md')} {
        &.MuiPaper-root{
            padding: 0;
            box-shadow: none;
        }
    }
`;

export const ProfissionaisContainer = styled('div')`
    display: grid;
    grid-template-columns: 1fr; // força com que os elementos fiquem em uma coluna, ou seja, pega o total disponível

    ${({theme}) => theme.breakpoints.up('md')} {
        grid-template-columns: repeat(2, 1fr);
        gap: ${({theme}) => theme.spacing(6)};
    }

    ${({theme}) => theme.breakpoints.down('md')} {
        margin-left: ${({theme}) => theme.spacing(-2)};
        margin-right: ${({theme}) => theme.spacing(-2)};
        > :nth-of-type(odd) { // Altera a cor apenas das posições ímpares
            background-color: ${({theme}) => theme.palette.background.paper};
        }
    }
`;