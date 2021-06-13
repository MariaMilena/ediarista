import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Avatar, Rating } from '@material-ui/core';

export const UserInformationContainer = styled('div')`
    display: grid;
    grid-template-columns: 60px 1fr; // indica que a primeira coluna tem 60px, e o resto preenche com o que ficou disponível
    grid-template-rows: repeat(3, auto); // ou auto auto auto : indica um tamanho automatico dependendo do conteúdo da linha
    grid-template-areas: 
        'avatar name'
        'avatar rating'
        'avatar description';
    background-color: ${({theme}) => theme.palette.grey[50]};
    padding: ${({theme}) => theme.spacing(3)};
    gap: ${({theme}) => theme.spacing(0.5) + ' ' + theme.spacing(2)};
    align-items: center;
`;

export const UserName = styled('div')`
    grid-area: name;
    font-weight: bold;
    color: ${({theme}) => theme.palette.text.primary};
    font-size: ${({theme}) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled('div')`
    grid-area: description;
    color: ${({theme}) => theme.palette.text.secondary};
    font-size: ${({theme}) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
    grid-area: avatar;
    width: 100%;
    height: initial; // tamanho padrão que o navegador defini para todos os elementos
    aspect-ratio: 1; // Pra ter certeza que vai ficar redondo
`;

export const RatingStyled = styled(Rating)`
    grid-area: rating;
    font-size: 1.2rem;
`;