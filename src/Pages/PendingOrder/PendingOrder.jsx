import React from "react";
import "./PendingOrder.css";
import HeaderContent from "../../Components/PendingOrder/HeaderContent/HeaderContent";
import BodyContent from "../../Components/PendingOrder/BodyContent/BodyContent";
import MenuContent from "../../Components/PendingOrder/MenuContent/MenuContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Page01() {
  return (
    <Box class="pagebody">
      <Grid container>
        <Grid item xs={12} md={12}>
          <HeaderContent />
        </Grid>
      </Grid>

      <Grid container>
      <Grid item xs={0.1} sm={1} md={2.2} >
        <MenuContent />
      </Grid>

      <Grid item xs={11.9} sm={11} md={9.8}>
        <BodyContent />
      </Grid>
      </Grid>

    </Box>
  );
}
