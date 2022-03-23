import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "./../../../Utils/Utils";
import {
  DRINK,
  GLASS,
  IBA,
  CATEGORY,
  INSTRUCTIONS,
  DATE,
} from "../../../constants/constants";
import styles from "./DrinkDetails.module.css";
import { IDrink } from "./../../../store/reducers/DrinksReducer";
import DetailsRow from "../DetailsRow/DetailsRow";

type DrinkDetailsProps = {
  currentDrink: IDrink;
};

function DrinkDetails({ currentDrink }: DrinkDetailsProps) {
  return currentDrink.idDrink ? (

      <Box sx={{ flexGrow: 1 }} className={styles.detailsWrapper}>
        <Grid container spacing={2} className={styles.drinkDetails}>
          <Grid item xs={12}>
            {currentDrink.strDrink && (
              <DetailsRow label={DRINK} content={currentDrink.strDrink} />
            )}
            {currentDrink.strCategory && (
              <DetailsRow label={CATEGORY} content={currentDrink.strCategory} />
            )}
            {currentDrink.strGlass && (
              <DetailsRow label={GLASS} content={currentDrink.strGlass} />
            )}
            {currentDrink.strIBA && (
              <DetailsRow label={IBA} content={currentDrink.strIBA} />
            )}
            {currentDrink.strInstructions && (
              <DetailsRow
                label={INSTRUCTIONS}
                content={currentDrink.strInstructions}
              />
            )}
            {currentDrink.dateModified && (
              <DetailsRow label={DATE} content={currentDrink.dateModified} />
            )}
          </Grid>
        </Grid>
      </Box>
  ) : null;
}

export default DrinkDetails;
