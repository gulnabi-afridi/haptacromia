import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Typography, Button } from "@mui/material";

function CustomizedButton({ color, text, icon, px }) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          px: px,
          py: "0.5rem",
          transition: "all 0.3s ease",
          "&:hover": {
            background: color,
            opacity: "0.9",
          },
        }}
      >
        {icon ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={icon} width={18} height={18} alt=""></Image>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                marginLeft: 0.5,
                color: "white",
                textTransform: "none",
              }}
            >
              {text}
            </Typography>
          </Box>
        ) : (
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "white",
              textTransform: "none",
            }}
          >
            {text}
          </Typography>
        )}
      </Button>
    </>
  );
}

export default CustomizedButton;
