import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { IDrink } from "../store/reducers/DrinksReducer";
import { STR_INGREDIENTS } from "../constants/constants";

export enum Filter {
  GLASS = "Glass",
  CATEGORY = "Category",
  INGREDIENT = "Ingredient",
}

export enum Sort {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}

type FilterDrinkBy = "strCategory" | "strGlass";

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

export const getIngredients = (drink: IDrink): string[] => {
  let ingredients: string[] = [];
  let tempIngredients = Object.entries(drink);
  tempIngredients.map(
    (ing) =>
      ing[0].includes(STR_INGREDIENTS) && ing[1] && ingredients.push(ing[1])
  );
  return ingredients;
};

const filteredDrinksBy = (
  drinks: IDrink[],
  filterBy: FilterDrinkBy,
  filterInput: string
) => {
  let filteredDrinks: IDrink[] = [];
  drinks.map(
    (drink) =>
      drink[filterBy]?.includes(filterInput) && filteredDrinks.push(drink)
  );
  return filteredDrinks;
};

export const filterDrinks = (
  filterBy: Filter,
  drinks: IDrink[],
  filterInput: string
) => {
  let filteredDrinks: IDrink[] = [];
  switch (filterBy) {
    case Filter.CATEGORY: {
      return filteredDrinksBy(drinks, "strCategory", filterInput);
    }
    case Filter.GLASS: {
      return filteredDrinksBy(drinks, "strGlass", filterInput);
    }
    case Filter.INGREDIENT: {
      drinks.map((drink) =>
        getIngredients(drink).map(
          (ingr) => ingr.includes(filterInput) && filteredDrinks.push(drink)
        )
      );
      return filteredDrinks;
    }
    default:
      return filteredDrinks;
  }
};
