import React from "react";
import { Box, Button, Typography } from "@mui/material";

const VcmLocator = () => {
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
        px: { xs: 2.5, lg: 6 },
        // px: { xs: 2, lg: 6 },
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
        Poner los valores del color deseado y se localizará el que le
        corresponda de la metodología VCM
      </Typography>
      {/* Color inputs + VCM methodology */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "repeat(3,1fr)",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 10,
          width: "100%",
          pt: 2,
        }}
      >
        {/* First Item */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "40% 20% 40%",
            gridTemplateRows: "1fr",
            justifyContent: "center",
            alignItems: "center",
            gridGap: "0.6rem",
            width: "100%",
          }}
        >
          {/* Left heading + Three Inputs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              gridGap: 1,
            }}
          >
            {/* Left Headinng */}
            <GreyHeading textTop="Cuatricromía " textBottom="VCM" />
            {/* Three inputs */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "1fr",
                gridGap: "0.15rem",
                width: "100%",
              }}
            >
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.05rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Middle Two Boxes */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "1fr",
              justifyContent: "center",
              alignItems: "end",
              columnGap: "0.2rem",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                border: "2px solid #999999",
                maxWidth: "40px",
                maxHeight: "30px",
                width: "100%",
                height: "100%",
                bgColor: "transparent",
                borderRadius: "6px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "2px solid #999999",
                maxWidth: "40px",
                maxHeight: "30px",
                width: "100%",
                bgColor: "transparent",
                borderRadius: "6px",
              }}
            ></Box>
          </Box>
          {/* Right heading + Threee inputs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "column",
              gridGap: 3,
            }}
          >
            {/* Right Headinng */}
            <GreyHeading textTop="Heptacromía " textBottom="VCM" />
            {/* Three inputs */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "1fr",
                gridGap: "0.15rem",
                width: "100%",
              }}
            >
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Second Item */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "40% 20% 40%",
            gridTemplateRows: "1fr",
            justifyContent: "center",
            alignItems: "center",
            gridGap: "0.6rem",
            width: "100%",
          }}
        >
          {/* Left heading + Three Inputs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              gridGap: 1,
            }}
          >
            {/* Left Headinng */}
            <GreyHeading textTop="Cuatricromía " textBottom="VCM" />
            {/* Three inputs */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "1fr",
                gridGap: "0.15rem",
                width: "100%",
              }}
            >
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.05rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Middle Two Boxes */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "1fr",
              justifyContent: "center",
              alignItems: "end",
              columnGap: "0.2rem",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                border: "2px solid #999999",
                maxWidth: "40px",
                maxHeight: "30px",
                width: "100%",
                height: "100%",
                bgColor: "transparent",
                borderRadius: "6px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "2px solid #999999",
                maxWidth: "40px",
                maxHeight: "30px",
                width: "100%",
                bgColor: "transparent",
                borderRadius: "6px",
              }}
            ></Box>
          </Box>
          {/* Right heading + Threee inputs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "column",
              gridGap: 3,
            }}
          >
            {/* Right Headinng */}
            <GreyHeading textTop="Heptacromía " textBottom="VCM" />
            {/* Three inputs */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "1fr",
                gridGap: "0.15rem",
                width: "100%",
              }}
            >
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Third Item */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "40% 20% 40%",
            gridTemplateRows: "1fr",
            justifyContent: "center",
            alignItems: "center",
            gridGap: "0.6rem",
            width: "100%",
          }}
        >
          {/* Left heading + Three Inputs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              gridGap: 1,
            }}
          >
            {/* Left Headinng */}
            <GreyHeading textTop="Cuatricromía " textBottom="VCM" />
            {/* Three inputs */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "1fr",
                gridGap: "0.15rem",
                width: "100%",
              }}
            >
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.05rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Middle Two Boxes */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "1fr",
              justifyContent: "center",
              alignItems: "end",
              columnGap: "0.2rem",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                border: "2px solid #999999",
                maxWidth: "40px",
                maxHeight: "30px",
                width: "100%",
                height: "100%",
                bgColor: "transparent",
                borderRadius: "6px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "2px solid #999999",
                maxWidth: "40px",
                maxHeight: "30px",
                width: "100%",
                bgColor: "transparent",
                borderRadius: "6px",
              }}
            ></Box>
          </Box>
          {/* Right heading + Threee inputs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "column",
              gridGap: 3,
            }}
          >
            {/* Right Headinng */}
            <GreyHeading textTop="Heptacromía " textBottom="VCM" />
            {/* Three inputs */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "1fr",
                gridGap: "0.15rem",
                width: "100%",
              }}
            >
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
              {/* item */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gridGap: "0.2rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "2px solid #999999",
                    padidng: "1rem 0.4rem",
                    outline: "none",
                    maxWidth: "50px",
                    width: "100%",
                    height: "30px",
                    borderRadius: "4px",
                    color: "#999999",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  R
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Bottom button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          mt: 2.5,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#F44545",
            color: "white",
            px: 2.5,
            py: 1.3,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#F44545",
              color: "white",
              opacity: 0.9,
            },
          }}
        >
          COMENZAR CONVERSIÓN
        </Button>
      </Box>
    </Box>
  );
};

export default VcmLocator;

const GreyHeading = ({ textTop, textBottom }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
          color: "#999999",
          fontWeight: 500,
        }}
      >
        {textTop}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          color: "#999999",
          fontWeight: 500,
        }}
      >
        {textBottom}
      </Typography>
    </Box>
  );
};
