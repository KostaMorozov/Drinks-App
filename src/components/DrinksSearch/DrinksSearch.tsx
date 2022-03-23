import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as actionCreators from "../../store/actions/ActionCreators";
import { SEARCH, SEARCH_DRINKS } from "../../constants/constants";
import styles from "./DrinksSearch.module.css";
import SearchHeader from "./SearchHeader/SearchHeader";

type DrinksSearchProps = {
  actions: typeof actionCreators;
};

const DrinksSearch = ({ actions }: DrinksSearchProps) => {
  const [drinkToSearch, setDrinkToSearch] = useState<string>("");
  const {
    setDrinks,
    setSearchedDrink,
    setCurrentDrink,
    setFilterBy,
    setFilterInput,
  } = actions;

  const handleDrinkToSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDrinkToSearch(event.target.value);
  };

  const searchDrinksHandler = () => {
    setDrinks(drinkToSearch);
    setSearchedDrink(drinkToSearch);
    setCurrentDrink("");
    setDrinkToSearch("");
    setFilterBy("");
    setFilterInput("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} item xs={12} className="m-0 ">
        <Grid item xs={12} className="d-flex justify-content-center">
          <SearchHeader/>
        </Grid>
        <Grid item xs={12} className="d-flex align-items-center justify-content-center mt-2">
          <TextField
            className="w-75"
            value={drinkToSearch}
            onChange={(event) => handleDrinkToSearch(event)}
            label={SEARCH_DRINKS}
          />
          <Button
            className={styles.searchButton}
            disabled={drinkToSearch.length === 0}
            onClick={searchDrinksHandler}
            variant="contained"
          >
            {SEARCH}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DrinksSearch;
