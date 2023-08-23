import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomizedButton from "../Common/CustomizedButton/CustomizedButton";

const MiddleTop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        borderRadius: "8px",
        boxShadow: " 0px 2px 5px 3px rgba(0,0,0,0.15)",
      }}
    >
      {/* Top Image + Text Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: "100%",
            height: "326.73px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/assets/conversor/testimg.jpg"
            alt="Image"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        {/* Headings + Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "8px",
            py: 1.5,
          }}
        >
          {/* Headings */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: 4,
              pt: 0.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  Color: "black",
                }}
              >
                Cuatricromía Actua
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  Color: "black",
                }}
              >
                140.200
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  Color: "black",
                }}
              >
                Cuatricromía VCM
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  Color: "black",
                }}
              >
                80.000
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: "1rem", lg: "2rem" },
              width: "auto",
              py: "1rem",
              px: 2,
            }}
          >
            <CustomizedButton
              text="Mezclar"
              color="#2697FF"
              px={{ xs: "3rem", lg: "2rem" }}
            />
            <CustomizedButton
              text="Superponer"
              color="#E72C79"
              px={{ xs: "2.4rem", lg: "2rem" }}
            />
            <CustomizedButton
              text="Poner en Calado"
              color="#F44545"
              px="1.5rem"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MiddleTop;
