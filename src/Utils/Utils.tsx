import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { IDrink } from "../store/reducers/DrinksReducer";

export enum Filter {
  GLASS = "Glass",
  CATEGORY = "Category",
  INGREDIENT = "Ingredient",
}

export enum Sort {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const sortDrinksAscendingOrder = (a: IDrink, b: IDrink) => {
  if (a.strDrink && b.strDrink) {
    if (a.strDrink < b.strDrink) {
      return 1;
    }
    if (a.strDrink > b.strDrink) {
      return -1;
    }
  }
  return 0;
};

export const sortDrinksDescendingOrder = (a: IDrink, b: IDrink) => {
  if (a.strDrink && b.strDrink) {
    if (a.strDrink < b.strDrink) {
      return -1;
    }
    if (a.strDrink > b.strDrink) {
      return 11;
    }
  }
  return 0;
};

export const filterDrinks = (
  filter: Filter,
  drinks: IDrink[],
  filteredDrink: string
) => {
  let filteredDrinks: IDrink[] = [];
  switch (filter) {
    case Filter.CATEGORY: {
      for (let drink of drinks) {
        if (drink.strCategory?.includes(filteredDrink))
          filteredDrinks.push(drink);
      }

      return filteredDrinks;
    }
    case Filter.GLASS: {
      for (let drink of drinks) {
        if (drink.strGlass?.includes(filteredDrink)) filteredDrinks.push(drink);
      }

      return filteredDrinks;
    }
    case Filter.INGREDIENT: {
      for (let drink of drinks) {
        if (
          drink.strIngredient1?.includes(filteredDrink) ||
          drink.strIngredient2?.includes(filteredDrink) ||
          drink.strIngredient3?.includes(filteredDrink) ||
          drink.strIngredient4?.includes(filteredDrink) ||
          drink.strIngredient5?.includes(filteredDrink)
        )
          filteredDrinks.push(drink);
      }

      return filteredDrinks;
    }
    default:
      return filteredDrinks;
  }
};
