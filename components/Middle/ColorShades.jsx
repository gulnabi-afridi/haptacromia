import React from "react";
import { Box, Typography } from "@mui/material";

const ColorShades = () => {
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
        Las tonalidades o matices de un color tienen su fórmula y no pueden
        cambiar de familia
      </Typography>
      {/* Color boxes with different opacity */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(10,1fr)",
          gridTemplateRows: "1fr",
          justifyContent: "flex-end",
          alignItems: "center",
          gridGap: { xs: 1.5, lg: 2.5 },
          width: "100%",
          pt: 2,
        }}
      >
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            100
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 1,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            90
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.9,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            80
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.8,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            70
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.7,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            60
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.6,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            50
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.5,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            40
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.4,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            30
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              opacity: 0.3,
              borderRadius: "4px",
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            20
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.2,
            }}
          ></Box>
        </Box>
        {/* Item */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gridGap: 2,
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
            10
          </Typography>
          <Box
            sx={{
              width: "100%",
              py: { xs: 1.7, lg: 2.3 },
              backgroundColor: "#00AEEF",
              borderRadius: "4px",
              opacity: 0.1,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ColorShades;
