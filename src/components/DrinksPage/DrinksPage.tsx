import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Filter, Item } from "../../Utils/Utils";
import { RootStore } from "../../store/store";
import DrinksSearch from "./../DrinksSearch/DrinksSearch";
import DrinksDetails from "../DrinksDetails/DrinksDetails";
import RandomDrink from "../RandomDrink/RandomDrink";
import DrinksFilter from "./../DrinksFilter/DrinksFilter";
import { IDrink } from "../../store/reducers/DrinksReducer";
import * as actionCreators from "../../store/actions/ActionCreators";
import {
  sortDrinksAscendingOrder,
  sortDrinksDescendingOrder,
  filterDrinks,
} from "./../../Utils/Utils";

type DrinksPageProps = LinkDispatchProps & LinkStateProps;

class DrinksPage extends Component<DrinksPageProps> {
  state = {
    drinks: [],
  };

  handleFilter = (filterBy: Filter, filteredDrink: string) => {
    const filteredDrinks = filterDrinks(
      filterBy as Filter,
      this.props.drinks,
      filteredDrink
    );
    this.props.actions.setFilteredDrinks(filteredDrinks);
    this.props.actions.setCurrentDrink("");
    this.setState((prevState) => {
      return { ...prevState, drinks: filteredDrinks };
    });
  };

  handleSorting = () => {
    let sortedDrinks =
      this.props.sortingOrder === "ASC"
        ? this.props.drinks.sort(sortDrinksAscendingOrder)
        : this.props.drinks.sort(sortDrinksDescendingOrder);
    this.props.actions.setSortedDrinks(sortedDrinks);
    this.props.actions.setSortingOrder(this.props.sortingOrder);
    this.setState((prevState) => {
      return { ...prevState, drinks: sortedDrinks };
    });
  };

  render() {
    const { actions, drinks, searchedDrink, sortingOrder, currentDrink } =
      this.props;

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="d-flex justify-content-center">
          <Grid item xs={4}>
            <DrinksSearch actions={actions} />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="mb-2 px-2">
          <Grid item xs={4}>
            <Item>
              <DrinksFilter drinks={drinks} onFilter={this.handleFilter} />
            </Item>
          </Grid>
        </Grid>
        <Grid>
          <DrinksDetails
            actions={actions}
            drinks={drinks}
            currentDrink={currentDrink ?? {}}
            searchedDrink={searchedDrink}
            sortingOrder={sortingOrder}
            onSort={this.handleSorting}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <RandomDrink />
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

interface LinkStateProps {
  drinks: IDrink[];
  sortingOrder: string;
  searchedDrink: string;
  currentDrink?: IDrink;
}
interface LinkDispatchProps {
  actions: typeof actionCreators;
}

const mapStateToProps = (state: RootStore) => {
  return {
    drinks: state.cocktails.drinks,
    currentDrink: state.cocktails.currentDrink,
    searchedDrink: state.cocktails.searchedDrink,
    sortingOrder: state.cocktails.sortingOrder,
    filteredDrinks: [],
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksPage);
