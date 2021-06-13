import React from "react";
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style';

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element; // JSX.Element(com elementos html) e a interrogação indica que é opicional
}

const PageTitle: React.FC<PageTitleProps> = (props) => { // props é objeto que tem acesso a todos a propriedades que passar para esse component
    return (
        <div>
            <PageTitleContainer>
                <PageTitleStyled>{props.title}</PageTitleStyled>
                <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
            </PageTitleContainer> 
        </div> // As chaves identificam as variáveis com este nome
    );
}

export default PageTitle;