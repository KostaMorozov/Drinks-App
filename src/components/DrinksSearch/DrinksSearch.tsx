import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { Item } from "../../Utils/Utils";
import * as actionCreators from "../../store/actions/ActionCreators";
import { SEARCH } from "../../constants/constants";
import styles from "./DrinksSearch.module.css";

type DrinksSearchProps = {
  actions: typeof actionCreators;
};

const DrinksSearch = ({ actions }: DrinksSearchProps) => {
  const [drinkToSearch, setDrinkToSearch] = useState<string>("");
  const { setDrinks, setSearchedDrink, setCurrentDrink } = actions;

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
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item className="d-flex align-items-center justify-content-center">
        <TextField
          id="outlined-basic"
          value={drinkToSearch}
          onChange={(event) => handleDrinkToSearch(event)}
          label="Drinks"
          variant="outlined"
        />
        <Button
          className={styles.searchButton}
          disabled={drinkToSearch.length === 0}
          onClick={searchDrinksHandler}
          variant="contained"
        >
          {SEARCH}
        </Button>
      </Item>
    </Box>
  );
};

export default DrinksSearch;
