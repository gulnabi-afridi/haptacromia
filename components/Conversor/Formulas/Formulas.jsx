import React from "react";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";

function Formulas() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          background: "white",
          p: "12px 18px",
        }}
      >
        {/* ----------left part---------- */}
        <Box sx={{ width: "50%", mr: "12px" }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", xmd: "20px" },
              fontWeight: "500",
              fontFamily: ["DM Sans", "sans-serif"],
            }}
          >
            Fórmulas cuatricromia VCM
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            {/* nested left part */}
            <Box
              sx={{
                display: "flex",
                width: "50%",
                flexDirection: "column",
                mt: "40px",
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", mb: "15px" }}
                  >
                    <Box
                      sx={{
                        paddingLeft: { xs: "1px", xmd: "3px" },
                        mr: { xs: "0px", xmd: "18px" },
                      }}
                    >
                      <Typography sx={{ fontSize: "7px", fontWeight: "500" }}>
                        VCM
                      </Typography>
                      <Typography sx={{ fontSize: "7px", fontWeight: "500" }}>
                        CMYK
                      </Typography>
                    </Box>

                    <Box>
                      <Box sx={{ display: "flex" }}>
                        {[0, 1, 2, 3].map((item, index) => {
                          return (
                            <Box
                              key={index}
                              sx={{
                                width: "6.34px",
                                height: "6.65px",
                                border: "1px solid black",
                                background: "#00AEEF",
                                mr: "5px",
                                transform: "rotate(45deg)",
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
                  </Box>
                );
              })}
            </Box>
            {/* nested right Box */}
            <Box sx={{}}>
              <Box
                sx={{
                  width: { xs: "60px", xmd: "96px" },
                  mb: "-15px",
                  height: "40px",
                  background: "#939598",
                  clipPath: "polygon(48% 0, 0 40%, 100% 40%)",
                }}
              ></Box>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "60px", xmd: "96px" },
                      height: "40px",
                      background: "#00AEEF",
                      mb: "4px",
                    }}
                  ></Box>
                );
              })}
              <Box
                sx={{
                  width: { xs: "60px", xmd: "96px" },
                  mt: "8px",
                  height: "40px",
                  background: "#939598",
                  clipPath: "polygon(100% 0, 0 0, 48% 46%)",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>

        {/* right part */}

        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", xmd: "20px" },
              fontWeight: "500",
              fontFamily: ["DM Sans", "sans-serif"],
              mb: "20px",
            }}
          >
            Fórmulas heptacromia VCM
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* nested right left div */}
            <Box sx={{}}>
              <Box
                sx={{
                  width: { xs: "60px", xmd: "96px" },
                  mb: "-15px",
                  height: "40px",
                  background: "#939598",
                  clipPath: "polygon(48% 0, 0 40%, 100% 40%)",
                }}
              ></Box>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "60px", xmd: "96px" },
                      height: "40px",
                      background: "#00AEEF",
                      mb: "4px",
                    }}
                  ></Box>
                );
              })}
              <Box
                sx={{
                  width: { xs: "60px", xmd: "96px" },
                  mt: "8px",
                  height: "40px",
                  background: "#939598",
                  clipPath: "polygon(100% 0, 0 0, 48% 46%)",
                }}
              ></Box>
            </Box>

            {/* nested right --- right div  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      alignItems: "start",
                      mb: "14px",
                      ml: { xs: "5px", xmd: "20px" },
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "6px", fontWeight: "500", mb: "1px" }}
                    >
                      VCM Heptacromia N
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                        return (
                          <Box
                            key={index}
                            sx={{
                              width: "6.34px",
                              height: "6.65px",
                              border: "1px solid black",
                              background: "#00AEEF",
                              mr: "5px",
                              mb: "1px",
                              transform: "rotate(45deg)",
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
                      100 000 000 000 000 000
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Formulas;
