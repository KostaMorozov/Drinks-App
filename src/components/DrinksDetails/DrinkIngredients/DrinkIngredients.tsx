import React from "react";
import Grid from "@mui/material/Grid";
import { getIngredients, Item } from "./../../../Utils/Utils";
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
            <b className="label">{INGREDIENTS}:</b> &nbsp;&nbsp;
            {currentDrink &&
              getIngredients(currentDrink).map((ingredient) => (
                <h6 key={ingredient} className="labelContext">
                  {ingredient}
                </h6>
              ))}
          </Grid>
        )}
      </Grid>
    </Item>
  ) : null;
};

export default DrinkIngredients;
