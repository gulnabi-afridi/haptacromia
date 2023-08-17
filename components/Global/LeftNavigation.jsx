import React from "react";
import TopNavigation from "../../components/Global/TopNavigation";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function LeftNavigation() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        background: "#2F2F2F",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Nav Menus/icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          mt: 8,
        }}
      >
        {Menus?.map((menu, index) => {
          return (
            <Link style={{ width: "100%" }} href={menu.route} key={index}>
              <Box
                sx={
                  router.pathname === menu.route
                    ? {
                        width: "100%",
                        height: "38px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0,174,239,0.6)",
                        "&:hover": {
                          background: "rgba(0,174,239,0.6)",
                        },
                        cursor: "pointer",
                      }
                    : {
                        width: "100%",
                        height: "38px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          background: "rgba(0,174,239,0.6)",
                        },
                        cursor: "pointer",
                      }
                }
              >
                <Image
                  src={menu.icoURL}
                  alt="logo"
                  width={18.73}
                  height={17.94}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default LeftNavigation;

const Menus = [
  {
    Name: "Home",
    icoURL: "/assets/headers/home.svg",
    route: "/",
  },
  {
    Name: "Home",
    icoURL: "/assets/headers/conversor.svg",
    route: "/conversor",
  },
  {
    Name: "Home",
    icoURL: "/assets/headers/doc.svg",
    route: "/edit",
  },
  {
    Name: "Home",
    icoURL: "/assets/headers/settings.svg",
    route: "/setting",
  },
  {
    Name: "Home",
    icoURL: "/assets/headers/share.svg",
    route: "/share",
  },
];
