import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

// Componnets
import TopNavigation from "../../components/Global/TopNavigation";
import LeftNavigation from "../../components/Global/LeftNavigation";

function CustomLayoutLeftNavigation({ children }) {
  return (
    <>
      <TopNavigation />

      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={0}>
          {/* Left Navigation */}
          <Grid
            item
            xs={0.5}
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <LeftNavigation />
          </Grid>

          {/* Main Content Box */}
          <Grid item xs={11.5}>
            <main>{children}</main>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CustomLayoutLeftNavigation;
