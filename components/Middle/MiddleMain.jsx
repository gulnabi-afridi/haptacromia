import React from "react";
import { Box } from "@mui/material";
import MiddleTop from "./MiddleTop";
import Primary from "./Primary";
import Secondary from "./Secondary";
import Tertiary from "./Tertiary";
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
