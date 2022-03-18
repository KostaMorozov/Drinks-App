import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import * as actionCreators from "../../../store/actions/ActionCreators";
import { IDrink } from "./../../../store/reducers/DrinksReducer";
import {
  INITIAL_DRINK,
  NO_DRINKS_WERE_FOUND,
} from "./../../../constants/constants";
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
  const { setDrinks, setCurrentDrink } = actions;

  useEffect(() => {
    setDrinks(INITIAL_DRINK); // eslint-disable-next-line
  }, []);

  const handleCurrentDrink = (id: string) => {
    setCurrentDrink(id);
  };

  return drinks && drinks.length !== 0 ? (
    <Box sx={{ flexGrow: 1 }} className={styles.listWrapper}>
      <SortDrinks onSort={onSort} searchedDrink={searchedDrink} />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          cursor: "pointer",
        }}
      >
        {drinks.map((drink) => (
          <ListItem
            key={drink.idDrink}
            onClick={() => handleCurrentDrink(drink.idDrink ?? "")}
            className={` ${
              currentDrink!.idDrink === drink.idDrink && styles.currentDrink
            }`}
          >
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={drink.strDrink} />
          </ListItem>
        ))}
      </List>
    </Box>
  ) : (
    <div>{NO_DRINKS_WERE_FOUND}</div>
  );
};

export default DrinksList;
