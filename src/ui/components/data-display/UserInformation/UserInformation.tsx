import React from "react";
import { UserInformationContainer, UserName, UserDescription, AvatarStyled, RatingStyled } from "./UserInformation.style";

interface UserInformationProps{
    picture: string,
    name: string,
    rating: number,
    description?: string,
};

const UserInformation = ({
    picture, name, rating, description // para não precisar usar o props como parâmetro
}) => {
    return <UserInformationContainer>
        <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
        <UserName>{name}</UserName>
        <RatingStyled value={rating} readOnly/>
        <UserDescription>{description}</UserDescription>
    </UserInformationContainer>;
};

export default UserInformation;