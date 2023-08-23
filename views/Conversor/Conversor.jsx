import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Header from "@/components/Conversor/Header";
import Contrast from "@/components/Contrast/Contrast";
import Formulas from "../../components/Conversor/Formulas/Formulas";
import CustomeColorPicker from "../../components/Conversor/Formulas/ColorPicker";
import MiddleMain from "@/components/Middle/MiddleMain";

function Conversor() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: "#D8D8D8",
        }}
      >
        {/* Conversor Header */}

        <Header />

        <Grid container spacing={{ xs: 1, xmd: 2 }}>
          {/* first column */}
          <Grid
            item
            sx={{
              minHeight: "100vh",
            }}
            xs={3.8}
          >
            <Formulas />
            <CustomeColorPicker />
          </Grid>

          {/* secound column */}
          <Grid item sx={{ minHeight: "100vh" }} xs={5.5}>
            <MiddleMain />
          </Grid>

          {/* third column */}
          <Grid item sx={{ minHeight: "100vh" }} xs={2.5}>
            <Contrast />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Conversor;
