import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from 'ui/components/surfaces/Footer/Footer.style';
import { Typography, Box } from "@material-ui/core";

const Footer = () => { // mt é uma abreviação para margin top
    return <FooterStyled >
        <FooterContainer>
            <Box sx={{maxWidth: '400px'}}>
                <FooterTitle>Quem somos</FooterTitle> 
                <Typography variant={'body2'} sx={{mt: 2}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, doloremque rem officiis id veniam veritatis reiciendis fugiat voluptatem voluptatibus commodi, et fuga neque optio adipisci similique dignissimos repellat vero ea!</Typography>
            </Box>
            <div>
                <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                <AppList>
                    <li>
                        <a 
                            href={"https://github.com/MariaMilena/ediarista"} 
                            target={"_black"}
                            rel={"noopener noreferrer"}
                        >
                            <img src={"/img/logos/app-store.png"} alt={"App Store"} />
                        </a>
                    </li>
                    <li>
                        <a 
                            href={"https://github.com/MariaMilena/NLW05-ReactJS"} 
                            target={"_black"}
                            rel={"noopener noreferrer"}
                        >
                            <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
                        </a>
                    </li>
                </AppList>
            </div>
        </FooterContainer>
    </FooterStyled>;
}

export default Footer;