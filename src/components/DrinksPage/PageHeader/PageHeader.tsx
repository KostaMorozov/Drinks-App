import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { COCKTAILS_APP } from "../../../constants/constants";
import styles from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <div className={styles.header}>
      <AppBar>
        <Typography variant="h5" component="h1" className={styles.background}>
          <Toolbar>{COCKTAILS_APP}</Toolbar>
        </Typography>
      </AppBar>
    </div>
  );
};
export default PageHeader;
