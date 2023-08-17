import React from "react";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";


function TopNavigation() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "70px",
          background: "#212332",
          px: { lg: 3, xs: 2 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Image
          src={"/assets/headers/logo.svg"}
          alt="logo"
          width={74}
          height={54}
        />

        {/* Search bar */}
        <Box
          sx={{
            width: "654.64px",
            height: "43px",
            overflow: "hidden",
            borderRadius: "7px",
            background: "#FFFFFF",
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              border: "none",
              borderRadius: "none",
              background: "transparent",
              fontFamily: "Poppins",
              fontSize: "19px",
              lineHeight: "19.5px",
              color: "#AAAAAA",
              padding: "0px 12px",
            }}
            placeholder="Search for products, brands and more"
          />
        </Box>

        {/* Profiles button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Notification Ico */}
          <Badge
            badgeContent={4}
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: "11px",
              lineHeight: "16px",
              fontWeight: 400,
              cursor: "pointer",
              "& .MuiBadge-badge": {
                backgroundColor: "#ED028C",
              },
              mr: 2,
            }}
            color="primary"
          >
            <NotificationsIcon sx={{ color: "#00AEEF", fontSize: "30px " }} />
          </Badge>
          {/* Shopping beg ico */}
          <Badge
            badgeContent={4}
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: "11px",
              lineHeight: "16px",
              fontWeight: 400,
              cursor: "pointer",
              "& .MuiBadge-badge": {
                backgroundColor: "#ED028C",
              },
              mr: 4,
            }}
            color="primary"
          >
            <ShoppingBagIcon sx={{ color: "#00AEEF", fontSize: "30px " }} />
          </Badge>
          {/* avatar */}
          <Avatar alt="Jeslin" src="/assets/headers/user.svg" />
        </Box>
      </Box>
    </>
  );
}

export default TopNavigation;
