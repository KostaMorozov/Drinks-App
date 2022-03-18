import React from "react";
import Grid from "@mui/material/Grid";
import { Item } from "./../../../Utils/Utils";
import { INGREDIENTS } from "../../../constants/constants";
import { IDrink } from "../../../store/reducers/DrinksReducer";

type DrinkIngredientsProps = {
  currentDrink: IDrink;
};

const DrinkIngredients = ({ currentDrink }: DrinkIngredientsProps) => {
  return currentDrink.idDrink ? (
    <Item>
      <Grid item xs={12}>
        {currentDrink.strDrink && (
          <Grid item xs={12} className="d-flex justify-content-start m-2">
            <b className="font-weight-bold">{INGREDIENTS}:</b> &nbsp;&nbsp;
            <h6>
              {currentDrink.strIngredient1}&nbsp;&nbsp;
              {currentDrink.strIngredient2}&nbsp;&nbsp;
              {currentDrink.strIngredient3}&nbsp;&nbsp;
              {currentDrink.strIngredient4}&nbsp;&nbsp;
              {currentDrink.strIngredient5}
            </h6>
          </Grid>
        )}
      </Grid>
    </Item>
  ) : null;
};

export default DrinkIngredients;
