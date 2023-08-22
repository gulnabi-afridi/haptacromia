import React from "react";
import { Box, Typography } from "@mui/material";

const Tertiary = () => {
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
          color: "black",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Calculado en bases, Binarios, Terciarios y Cuaternarios para CVCM
      </Typography>
      {/* Color Boxes + Generated color box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pt: 3,
        }}
      >
        {/* Color Boxes */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridTemplateRows: "1fr",
            gridGap: { xs: 2 },
            flexDirection: "row",
            width: "100%",
            mr: { xs: 1, lg: 4 },
          }}
        >
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Cian
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
          </Box>
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
              }}
            >
              Magenta
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
          </Box>
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
              }}
            >
              Amarillo
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
          </Box>
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
              }}
            >
              Rojo
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
          </Box>
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
              }}
            >
              Verde
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
          </Box>
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
              }}
            >
              Violeta
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
          </Box>
          {/* Box item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: { xs: 1, lg: 1.5 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "black",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
              }}
            >
              Negro
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                rowGap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  py: { xs: 1.2, lg: 1.8 },
                  backgroundColor: "#00AEEF",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                }}
              >
                100
              </Typography>
            </Box>
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

export default Tertiary;
