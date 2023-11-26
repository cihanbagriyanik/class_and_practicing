import React from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";


const RecipeCard = () => {
 
  return (
    <MainContainer>
      {[].map((a) => (
        <Cards >
          <RecipeHeader></RecipeHeader>
          <RecipeImage src="" />
          <Button  >Details</Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
