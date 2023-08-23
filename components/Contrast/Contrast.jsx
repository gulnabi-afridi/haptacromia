import React from "react";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";

function Contrast() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "40px",
        ml: { xs: "5px", xmd: "0px" },
      }}
    >
      {/* circles with color */}
      <Box
        sx={{
          width: "210px",
          borderRadius: "50%",
          border: "2px solid rgba(0, 0, 0, 0.25)",
          p: "24px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "158px",
            borderRadius: "50%",
            border: "2px solid rgba(0, 0, 0, 0.25)",
            p: "24px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "107px",
              borderRadius: "50%",
              border: "2px solid rgba(0, 0, 0, 0.25)",
              p: "23px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "57px",
                borderRadius: "50%",
                border: "2px solid #1A1718",
                p: "14px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "23px",
                  height: "23px",
                  borderRadius: "50%",
                  background: "#1A1718",
                }}
              ></Box>
              {/* 4th circle color Boxes */}
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#017A47",
                  position: "absolute",
                  top: "54%",
                  left: "-25%",
                }}
              ></Box>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#952C57",
                  position: "absolute",
                  top: "54%",
                  left: "80%",
                }}
              ></Box>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#947138",
                  position: "absolute",
                  top: "-27%",
                  left: "30%",
                }}
              ></Box>
            </Box>
            {/* 3rd circle color Boxes */}
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#C8242B",
                position: "absolute",
                top: "13%",
                left: "0%",
              }}
            ></Box>
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#32336D",
                position: "absolute",
                top: "15%",
                left: "79%",
              }}
            ></Box>
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#016579",
                position: "absolute",
                bottom: "-6%",
                right: "36%",
              }}
            ></Box>
          </Box>
          {/* 2nd circle color Box */}
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#C8242B",
              position: "absolute",
              top: "18%",
              left: "0%",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#947138",
              position: "absolute",
              top: "-5%",
              left: "43%",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#017A47",
              position: "absolute",
              top: "66%",
              left: "0%",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#016579",
              position: "absolute",
              bottom: "-6%",
              right: "40%",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#32336D",
              position: "absolute",
              top: "15%",
              left: "85%",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#952C57",
              position: "absolute",
              top: "61%",
              left: "87%",
            }}
          ></Box>
        </Box>
        {/* first circle color */}
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#C8242B",
            position: "absolute",
            top: "20%",
            left: "-1%",
          }}
        ></Box>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#947138",
            position: "absolute",
            top: "-5%",
            left: "44%",
          }}
        ></Box>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#017A47",
            position: "absolute",
            top: "70%",
            left: "-1%",
          }}
        ></Box>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#016579",
            position: "absolute",
            bottom: "-6%",
            right: "42%",
          }}
        ></Box>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#32336D",
            position: "absolute",
            top: "15%",
            left: "88%",
          }}
        ></Box>
        <Box
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#952C57",
            position: "absolute",
            top: "65%",
            left: "93%",
          }}
        ></Box>
      </Box>

      {/* secound section */}
      <Box
        sx={{
          maxWidth: "249px",
          minHeight: "249px",
          width: "100%",
          background: "#FFFFFF",
          mt: "30px",
          p: "20px",
        }}
      >
        {contrastDegree.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: "7px" }}
            >
              <Button
                sx={{
                  width: "35px",
                  height: "20px",
                  background: "red",
                  borderRadius: "0px",
                  border: "3px solid #D9D9D9",
                  mr: "20px",
                }}
              ></Button>
              <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                {item.text}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* third section */}
      <Box
        sx={{
          maxWidth: "249px",
          width: "100%",
          display: "flex",
          p: "20px",
          background: "#FFFFFF",
          mt: "20px",
        }}
      >
        {/* left part */}
        <Box
          sx={{
            display: "flex",
            width: "60%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14].map(() => {
            return (
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    px: "20px",
                    color: "#E7E8E9",
                    border: "2px solid rgba(0, 0, 0, 0.25)",
                    mb: "4px",
                  }}
                >
                  VCM
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* right Box */}
        <Box sx={{ display: "flex", width: "40%", flexDirection: "column" }}>
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21,
          ].map(() => {
            return (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "10px",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  {[0, 1, 2, 3].map((item, index) => {
                    return (
                      <Box
                        sx={{
                          width: "9.15px",
                          height: "9.15px",
                          background: "#00AEEF",
                          mr: "7px",
                          mb: "3px",
                          transform: "rotate(45deg)",
                          border: "2px solid black",
                        }}
                      ></Box>
                    );
                  })}
                </Box>
                <Typography
                  sx={{
                    fontSize: "6px",
                    fontWeight: "500",
                    mt: "3px",
                    textAlign: "center",
                  }}
                >
                  100 000 000 000 <br />
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

const contrastDegree = [
  {
    color: "#5E2E7E",
    text: "Contraste de 1ª grado",
  },
  {
    color: "#5E2E7E",
    text: "Contraste de 2ª grado",
  },
  {
    color: "#5E2E7E",
    text: "Contraste de 3ª grado",
  },
  {
    color: "#5E2E7E",
    text: "Contraste de 4ª grado",
  },
  {
    color: "#5E2E7E",
    text: "Contraste mismo nivel",
  },
  {
    color: "#5E2E7E",
    text: "Contraste acromáticos",
  },
  {
    color: "#5E2E7E",
    text: "Contraste de tonalidades",
  },

  {
    color: "#5E2E7E",
    text: "Complementarios",
  },
];
export default Contrast;
