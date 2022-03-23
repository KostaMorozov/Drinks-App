import React from "react";
import { TextField } from "@mui/material";
import { SEARCH } from "./../../../constants/constants";

type InputFilterProps = {
  onSearchByFilter: (event: any) => void;
  filterValue: string;
  filterSearch: string;
};

const InputFilter = ({
  filterValue,
  filterSearch,
  onSearchByFilter,
}: InputFilterProps) => {
  return (
    <TextField
    className="w-75"
      value={filterSearch}
      onChange={(event) => onSearchByFilter(event)}
      label={SEARCH}
      disabled={filterValue.length === 0}
    />
  );
};

export default InputFilter;
