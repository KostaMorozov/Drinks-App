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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
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
        <Grid
          container
          spacing={2}
          item
          xs={9}
          className={styles.detailsWrapper}
        >
          <Grid item xs={6}>
            <DrinkDetails currentDrink={currentDrink} />
          </Grid>
          <Grid item xs={6}>
            <DrinkImage currentDrink={currentDrink} />
          </Grid>
          <Grid item xs={12}>
            <DrinkIngredients currentDrink={currentDrink} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DrinksDetails;
