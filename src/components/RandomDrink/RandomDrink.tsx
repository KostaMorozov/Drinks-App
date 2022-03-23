import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
      <Grid
        container
        spacing={1}
        className="d-flex justify-content-center randomBg"
      >
        <Grid item xs={12} className="d-flex justify-content-center randomBg">
          <h2 className="title">{RANDOM_DRINK}</h2>
        </Grid>
        <Grid item xs={12} className="d-flex justify-content-center randomBg">
          <img
            src={randomDrink.strDrinkThumb + "/preview"}
            className="randomImg"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RandomDrink;
