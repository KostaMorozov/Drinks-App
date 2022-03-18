import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Item } from "./../../../Utils/Utils";
import styles from "./DrinkImage.module.css";
import { IDrink } from "../../../store/reducers/DrinksReducer";

type DrinkImageProps = {
  currentDrink: IDrink;
};

const DrinkImage = ({ currentDrink }: DrinkImageProps) => {
  return currentDrink.strDrinkThumb ? (
    <Item>
      <Box sx={{ flexGrow: 1 }} className={styles.imgWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} className="d-flex justify-content-center">
            <img
              src={currentDrink.strDrinkThumb + "/preview"}
              className={styles.img}
              alt=""
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Item>
  ) : null;
};

export default DrinkImage;
