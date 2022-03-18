import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FILTER } from "../../../constants/constants";
import { Filter } from "../../../Utils/Utils";
import { IDrink } from "../../../store/reducers/DrinksReducer";

type DropDownFilterProps = {
  onFilterBy: (event: any) => void;
  filterValue: string;
  drinks: IDrink[];
};

const DropDownFilter = ({
  onFilterBy,
  filterValue,
  drinks,
}: DropDownFilterProps) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={!drinks?.length}>
        <InputLabel>{FILTER}</InputLabel>
        <Select value={filterValue} onChange={(event) => onFilterBy(event)}>
          <MenuItem value={Filter.GLASS}>{Filter.GLASS}</MenuItem>
          <MenuItem value={Filter.CATEGORY}>{Filter.CATEGORY}</MenuItem>
          <MenuItem value={Filter.INGREDIENT}>{Filter.INGREDIENT}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownFilter;
