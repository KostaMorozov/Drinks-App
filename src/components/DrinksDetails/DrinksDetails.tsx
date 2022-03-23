import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "../../Utils/Utils";
import styles from "./DrinksDetails.module.css";
import DrinkImage from "./DrinkImage/DrinkImage";
import DrinkDetails from "./DrinkDetails/DrinkDetails";
import DrinkIngredients from "./DrinkIngredients/DrinkIngredients";
import { IDrink } from "../../store/reducers/DrinksReducer";
import DrinksList from "./DrinksList/DrinksList";
import * as actionCreators from "../../store/actions/ActionCreators";
import NoDrinksFounded from "../NoDrinksFounded/NoDrinksFounded";

type DrinksDetailsProps = {
  actions: typeof actionCreators;
  drinks: IDrink[];
  currentDrink: IDrink;
  searchedDrink: string;
  sortingOrder: string;
  onSort: () => void;
};

const DrinksDetails = ({
  actions,
  drinks,
  currentDrink,
  searchedDrink,
  sortingOrder,
  onSort,
}: DrinksDetailsProps) => {
  return drinks ? (
    drinks.length !== 0 ? (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3.5}>
            <Item>
              <DrinksList
                actions={actions}
                drinks={drinks}
                currentDrink={currentDrink}
                searchedDrink={searchedDrink}
                sortingOrder={sortingOrder}
                onSort={onSort}
              />
            </Item>
          </Grid>
          {currentDrink.idDrink && (
            <Grid
              container
              spacing={1}
              item
              xs={8.5}
              className={styles.detailsWrapper}
            >
              <Grid item xs={12}>
                <Item className="d-flex">
                  <DrinkDetails currentDrink={currentDrink} />
                  <DrinkImage currentDrink={currentDrink} />
                </Item>
              </Grid>

              <Grid item xs={12}>
                <DrinkIngredients currentDrink={currentDrink} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    ) : null
  ) : (
    <NoDrinksFounded />
  );
};

export default DrinksDetails;
