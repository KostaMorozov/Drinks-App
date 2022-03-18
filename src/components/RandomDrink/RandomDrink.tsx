import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./RandomDrink.module.css";
import { RootStore } from "./../../store/store";
import * as actionCreators from "../../store/actions/ActionCreators";
import { RANDOM_DRINK } from "../../constants/constants";

const RandomDrink = () => {
  const { randomDrink } = useSelector((state: RootStore) => state.cocktails);
  const dispatch = useDispatch();
  const { setRandomDrink: getRandomDrink } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getRandomDrink(); // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} className="d-flex justify-content-center">
          <h2>{RANDOM_DRINK}</h2>
        </Grid>
        <Grid item xs={12} className="d-flex justify-content-center">
          <img
            src={randomDrink.strDrinkThumb + "/preview"}
            className={styles.img}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RandomDrink;
