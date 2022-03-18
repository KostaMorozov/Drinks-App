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

type DrinkDetailsProps = {
  currentDrink: IDrink;
};

function DrinkDetails({ currentDrink }: DrinkDetailsProps) {
  return currentDrink.idDrink ? (
    <Item>
      <Box sx={{ flexGrow: 1 }} className={styles.detailsWrapper}>
        <Grid container spacing={2} className={styles.drinkDetails}>
          <Grid item xs={12}>
            {currentDrink.strDrink && (
              <Grid item xs={12} className="d-flex justify-content-start my-4">
                <b className="font-weight-bold">{DRINK}:</b> &nbsp;
                <h6>{currentDrink.strDrink}</h6>
              </Grid>
            )}
            {currentDrink.strCategory && (
              <Grid item xs={12} className="d-flex justify-content-start my-4">
                <b>{CATEGORY}:</b>&nbsp;
                <h6>{currentDrink.strCategory}</h6>
              </Grid>
            )}
            {currentDrink.strGlass && (
              <Grid item xs={12} className="d-flex justify-content-start my-4">
                <b> {GLASS}:</b>&nbsp;
                <h6>{currentDrink.strGlass}</h6>
              </Grid>
            )}
            {currentDrink.strIBA && (
              <Grid item xs={12} className="d-flex justify-content-start my-4">
                <b> {IBA}:</b>&nbsp;
                <h6>{currentDrink.strIBA}</h6>
              </Grid>
            )}
            {currentDrink.strInstructions && (
              <Grid item xs={12} className="d-flex justify-content-start my-4">
                <b>{INSTRUCTIONS}:</b>&nbsp;
                <h6>{currentDrink.strInstructions}</h6>
              </Grid>
            )}
            {currentDrink.dateModified && (
              <Grid item xs={12} className="d-flex justify-content-start my-4">
                <b>{DATE}:</b>&nbsp;
                <h6>{currentDrink.dateModified}</h6>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
    </Item>
  ) : null;
}

export default DrinkDetails;
