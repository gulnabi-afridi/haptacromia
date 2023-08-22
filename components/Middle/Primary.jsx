import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Primary = () => {
  const [cian, setCian] = useState(15);
  const [magenta, setMagenta] = useState(25);
  const [amarillo, setAmarillo] = useState(30);

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
        py: 2,
        px: { xs: 2, lg: 4 },
      }}
    >
      {/* Top text label */}
      <Typography
        sx={{
          fontSize: "0.7rem",
          Color: "black",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Porcentajes de mezcla con colores bases
      </Typography>
      {/* Color incrementals + Generated color box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pt: 1.5,
        }}
      >
        {/* Color Incrementals */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "1.3rem",
          }}
        >
          {/* Cyan */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              <Box>
                <Image
                  src="/assets/conversor/up.svg"
                  alt="icon"
                  width={60}
                  height={10}
                  objectFit="contain"
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  Color: "black",
                  fontWeight: 500,
                }}
              >
                Cian
              </Typography>
              <Box>
                <Image
                  src="/assets/conversor/down.svg"
                  alt="icon"
                  width={60}
                  height={10}
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "black",
                ml: { xs: 1, lg: 1.6 },
              }}
            >
              {cian}
            </Typography>
          </Box>
          {/* Magenda */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              <Box>
                <Image
                  src="/assets/conversor/up.svg"
                  alt="icon"
                  width={60}
                  height={10}
                  objectFit="contain"
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  Color: "black",
                  fontWeight: 500,
                }}
              >
                Magenta
              </Typography>
              <Box>
                <Image
                  src="/assets/conversor/down.svg"
                  alt="icon"
                  width={60}
                  height={10}
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "black",
                ml: { xs: 1, lg: 1.6 },
              }}
            >
              {magenta}
            </Typography>
          </Box>
          {/* Amarillo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              <Box>
                <Image
                  src="/assets/conversor/up.svg"
                  alt="icon"
                  width={60}
                  height={10}
                  objectFit="contain"
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  Color: "black",
                  fontWeight: 500,
                }}
              >
                Amarillo
              </Typography>
              <Box>
                <Image
                  src="/assets/conversor/down.svg"
                  alt="icon"
                  width={60}
                  height={10}
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "black",
                ml: { xs: 1, lg: 1.6 },
              }}
            >
              {amarillo}
            </Typography>
          </Box>
        </Box>
        {/* Generated Color Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 1,
            border: "2px solid #D5D5D5",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              Color: "black",
              fontWeight: 500,
              mb: 0.5,
            }}
          >
            Resultado
          </Typography>
          <Box
            sx={{
              bgcolor: "#00AEEF",
              px: 2.5,
              py: 2.2,
              borderRadius: "4px",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Primary;
