import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "../../Utils/Utils";
import styles from "./NoDrinksFounded.module.css";
import { NO_DRINKS_WERE_FOUND } from '../../constants/constants';

const NoDrinksFounded = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.listWrapper}>
    <Grid item className="label d-flex justify-content-center mb-2">
      <Item className={`${styles.wrapper} d-flex`}>{NO_DRINKS_WERE_FOUND} </Item>
    </Grid>
  </Box>
  )
}

export default NoDrinksFounded
