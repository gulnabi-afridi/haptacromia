import React from "react";
import { Box } from "@mui/material";
import MiddleTop from "../../Conversor/Middle/MiddleTop";
import Primary from "../../Conversor/Middle/Primary";
import Secondary from "../../Conversor/Middle/Secondary";
import Tertiary from "../../Conversor/Middle/Tertiary";
import ColorShades from "./ColorShades";
import VcmLocator from "./VcmLocator";

const MiddleMain = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        rowGap: 1,
        pb: 5,
      }}
    >
      <MiddleTop />
      <Primary />
      <Secondary />
      <Tertiary />
      <ColorShades />
      <VcmLocator />
    </Box>
  );
};

export default MiddleMain;
