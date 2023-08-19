import React, { useState } from "react";
import { Box } from "@mui/material";
import { ChromePicker } from "react-color";
import CustomizedButton from "../../Common/CustomizedButton/CustomizedButton";

function CustomeColorPicker() {
  const [oneColor, setOneColor] = useState("yellow");
  const [secColor, setSecColor] = useState("green");

  //function
  const updateOneColor = (color) => {
    return setOneColor(color.hex);
  };

  const updateTwoColor = (color) => {
    return setSecColor(color.hex);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: "60px" }}>
      <Box sx={{ p: "0px 18px", display: "flex" }}>
        <ChromePicker
          disableAlpha={true}
          color={oneColor}
          onChangeComplete={updateOneColor}
        />
        <ChromePicker
          disableAlpha={true}
          color={secColor}
          onChangeComplete={updateTwoColor}
        />
      </Box>

      {/* buttons */}
      <Box
        sx={{
          display: "flex",
          mt: "20px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CustomizedButton color="#E72C79" text="Copiar Color" px="20px" />
        <CustomizedButton color="#F44545" text="Nuevo Color" px="20px" />
      </Box>
    </Box>
  );
}

export default CustomeColorPicker;
