import React from "react";
import { Item } from "../../../Utils/Utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./SortDrinks.module.css";

type SortDrinksProps = {
  onSort: () => void;
  searchedDrink: string;
};

const SortDrinks = ({ onSort, searchedDrink }: SortDrinksProps) => {
  return (
    <Item>
      <Box sx={{ minWidth: 120 }}>
        <Grid item xs={12}>
          <Item className={styles.drinkName} onClick={onSort}>
            {searchedDrink}
          </Item>
        </Grid>
      </Box>
    </Item>
  );
};

export default SortDrinks;
