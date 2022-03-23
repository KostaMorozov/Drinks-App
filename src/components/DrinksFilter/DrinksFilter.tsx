import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import DropDownFilter from "./DropDownFilter/DropDownFilter";
import InputFilter from "./InputFilter/InputFilter";
import { FILTER } from "../../constants/constants";
import { IDrink } from "../../store/reducers/DrinksReducer";
import * as actionCreators from "../../store/actions/ActionCreators";

type DrinksFilterProps = {
  drinks: IDrink[];
  onFilter: () => void;
  actions: typeof actionCreators;
  filterInput: string;
  filterBy: string;
};

const DrinksFilter = ({
  drinks,
  onFilter,
  actions,
  filterInput,
  filterBy,
}: DrinksFilterProps) => {
  const handleFilterBy = (event: any) => {
    actions.setFilterBy(event.target.value);
  };
  const handleFilterInput = (event: any) => {
    actions.setFilterInput(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} item xs={12} className="m-0">
        <Grid item xs={12} className="d-flex justify-content-start">
          <DropDownFilter
            onFilterBy={handleFilterBy}
            filterValue={filterBy}
            drinks={drinks}
          />
        </Grid>
        <Grid item xs={12} className="d-flex align-items-center ">
          <InputFilter
            filterValue={filterBy}
            filterSearch={filterInput}
            onSearchByFilter={handleFilterInput}
          />
          <div className="m-2"></div>
          <Button onClick={onFilter} disabled={filterInput.length === 0}>
            {FILTER}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DrinksFilter;
