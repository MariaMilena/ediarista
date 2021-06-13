import { styled } from '@material-ui/core/styles'

export const SafeEnvironmentContainer = styled('div')`
    color: ${({theme}) => theme.palette.text.secondary};
    
    padding: ${({theme}) => theme.spacing(5)} 0;
    text-align: right;
    padding: 16px 0;
    font-size: 12px;
`;

// background-color: ${({theme}) => theme.palette.background.default};