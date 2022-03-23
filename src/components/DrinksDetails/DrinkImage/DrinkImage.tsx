import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { IDrink } from "../../../store/reducers/DrinksReducer";

type DrinkImageProps = {
  currentDrink: IDrink;
};

const DrinkImage = ({ currentDrink }: DrinkImageProps) => {
  return currentDrink.strDrinkThumb ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} className="d-flex justify-content-center">
          <img
            src={currentDrink.strDrinkThumb + "/preview"}
            className="img"
            alt=""
          />
        </Grid>

      </Grid>
    </Box>
  ) : null;
};

export default DrinkImage;
