import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import * as actionCreators from "../../../store/actions/ActionCreators";
import { IDrink } from "./../../../store/reducers/DrinksReducer";
import styles from "./DrinksList.module.css";
import SortDrinks from "../SortDrinks/SortDrinks";

type DrinksListProps = {
  actions: typeof actionCreators;
  drinks: IDrink[];
  currentDrink: IDrink;
  searchedDrink: string;
  sortingOrder: string;
  onSort: () => void;
};

const DrinksList = ({
  actions,
  drinks,
  currentDrink,
  searchedDrink,
  sortingOrder,
  onSort,
}: DrinksListProps) => {
  const { setCurrentDrink } = actions;

  const handleCurrentDrink = (id: string) => {
    setCurrentDrink(id);
  };

  return drinks && drinks.length !== 0 ? (
    <Box sx={{ flexGrow: 1 }} className={styles.listWrapper}>
      <SortDrinks
        onSort={onSort}
        searchedDrink={searchedDrink}
        sortingOrder={sortingOrder}
      />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          cursor: "pointer",
          height: "29rem",
          overflow: "scroll",
        }}
      >
        {drinks.map((drink) => (
          <ListItem
            key={drink.idDrink}
            onClick={() => handleCurrentDrink(drink.idDrink ?? "")}
            className={`label ${
              currentDrink!.idDrink === drink.idDrink && styles.currentDrink
            }`}
          >
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={drink.strDrink} />
          </ListItem>
        ))}
      </List>
    </Box>
  ) : null;
};

export default DrinksList;
