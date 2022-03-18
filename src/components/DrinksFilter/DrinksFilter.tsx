import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import DropDownFilter from "./DropDownFilter/DropDownFilter";
import InputFilter from "./InputFilter/InputFilter";
import { FILTER } from "../../constants/constants";
import { Filter } from "../../Utils/Utils";
import { IDrink } from "../../store/reducers/DrinksReducer";

type DrinksFilterProps = {
  drinks: IDrink[];
  onFilter: (filterBy: Filter, filteredDrink: string) => void;
};

const DrinksFilter = ({ drinks, onFilter }: DrinksFilterProps) => {
  const [filterBy, setFilterBy] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const handleFilterBy = (event: any) => {
    setFilterBy(event.target.value);
  };
  const handleSearchByFilter = (event: any) => {
    setFilterInput(event.target.value);
  };

  const handleFilter = () => {
    setFilterInput("");
    setFilterBy("");
    return onFilter(filterBy as Filter, filterInput);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} item xs={12}>
        <Grid item xs={6}>
          <DropDownFilter
            onFilterBy={handleFilterBy}
            filterValue={filterBy}
            drinks={drinks}
          />
        </Grid>
        <Grid item xs={6}>
          <InputFilter
            filterValue={filterBy}
            filterSearch={filterInput}
            onSearchByFilter={handleSearchByFilter}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleFilter} disabled={filterInput.length === 0}>
            {FILTER}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DrinksFilter;
