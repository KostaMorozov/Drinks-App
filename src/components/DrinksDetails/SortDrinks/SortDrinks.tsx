import React from "react";
import { Item, Sort } from "../../../Utils/Utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./SortDrinks.module.css";

type SortDrinksProps = {
  onSort: () => void;
  searchedDrink: string;
  sortingOrder?: string;
};

const SortDrinks = ({
  onSort,
  searchedDrink,
  sortingOrder,
}: SortDrinksProps) => {
  return (
    <Item>
      <Box sx={{ minWidth: 80 }}>
        <Grid item xs={12}>
          <Item className={styles.drinkName} onClick={onSort}>
            <div className="d-flex align-items-center justify-content-center">
              {searchedDrink}&nbsp;&nbsp;
              <span
                className={
                  sortingOrder === Sort.DESCENDING
                    ? styles.arrowDown
                    : styles.arrowUp
                }
              ></span>
            </div>
          </Item>
        </Grid>
      </Box>
    </Item>
  );
};

export default SortDrinks;
