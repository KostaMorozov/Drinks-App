import React from "react";
import Grid from "@mui/material/Grid";

type DetailsRowProps = {
  label?: string;
  content?: string;
};

const DetailsRow = ({ label, content }: DetailsRowProps) => {
  return (
    <Grid item xs={12} className="d-flex justify-content-start my-4">
      <b className="label">{label}:</b> &nbsp;
      <h6 className="labelContext">{content}</h6>
    </Grid>
  );
};

export default DetailsRow;
