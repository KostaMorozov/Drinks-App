import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Filter, Item, Sort } from "../../Utils/Utils";
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
import PageHeader from "./PageHeader/PageHeader";
import styles from "./DrinksPage.module.css";
import NoDrinksFounded from "../NoDrinksFounded/NoDrinksFounded";

interface LinkStateProps {
  drinks: IDrink[];
  sortingOrder: string;
  searchedDrink: string;
  currentDrink?: IDrink;
  filterInput?: string;
  filterBy?: string;
}
interface LinkDispatchProps {
  actions: typeof actionCreators;
}

type DrinksPageProps = LinkDispatchProps & LinkStateProps;

class DrinksPage extends Component<DrinksPageProps> {
  handleFilter = () => {
    const currentDrinks = [...this.props.drinks];
    const filteredDrinks = filterDrinks(
      this.props.filterBy as Filter,
      currentDrinks,
      this.props.filterInput ?? ""
    );
    this.props.actions.setFilteredDrinks(filteredDrinks);
    this.props.actions.setCurrentDrink("");
  };

  handleSorting = () => {
    let sortedDrinks = [...this.props.drinks];
    this.props.sortingOrder === Sort.ASCENDING
      ? sortedDrinks.sort(sortDrinksAscendingOrder)
      : sortedDrinks.sort(sortDrinksDescendingOrder);
    this.props.actions.setSortedDrinks(sortedDrinks);
    this.props.actions.setSortingOrder(this.props.sortingOrder);
  };

  render() {
    const {
      actions,
      drinks,
      searchedDrink,
      sortingOrder,
      currentDrink,
      filterBy,
      filterInput,
    } = this.props;

    return (
      <>
        <PageHeader />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} item xs={12} className="mt-3 mb-2">
            <Item
              className={`${styles.searchFilterWrapper} d-flex align-items-center justify-content-center`}
            >
              <Grid xs={3.5}>
                <DrinksFilter
                  drinks={drinks}
                  onFilter={this.handleFilter}
                  actions={actions}
                  filterBy={filterBy ?? ""}
                  filterInput={filterInput ?? ""}
                />
              </Grid>
              &nbsp;&nbsp;
              <div className={styles.divider}></div>
              <Grid xs={8.5}>
                <DrinksSearch actions={actions} />
              </Grid>
            </Item>
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

          <Grid container className="mt-1">
            <Grid item xs={12}>
              <Item>
                <RandomDrink />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state: RootStore) => {
  return {
    drinks: state.cocktails.drinks,
    currentDrink: state.cocktails.currentDrink,
    searchedDrink: state.cocktails.searchedDrink,
    sortingOrder: state.cocktails.sortingOrder,
    filteredDrinks: [],
    filterInput: state.cocktails.filterInput,
    filterBy: state.cocktails.filterBy,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksPage);
