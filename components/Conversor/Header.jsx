import React from "react";
import Image from "next/image";
import { Typography, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomizedButton from "../../components/Common/CustomizedButton/CustomizedButton";
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "85px",
          p: "0px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={"/assets/conversor/process.svg"}
            alt="logo"
            width={25}
            height={25}
          ></Image>
          <Typography
            sx={{ fontSize: "19px", fontWeight: "500", marginLeft: "10px" }}
          >
            Conversor RGB a CMYK - VCM
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gridGap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Cargar Archivo button */}
          <CustomizedButton
            color={"#2697FF"}
            text={"Cargar Archivo"}
            icon={"/assets/conversor/Arrowdown.svg"}
            width={"183px"}
            height={"35px"}
            marginLeft={"15px"}
          ></CustomizedButton>

          {/* Exportar button */}
          <CustomizedButton
            color={"#E72C79"}
            text={" Exportar"}
            width={"94px"}
            height={"35px"}
            icon={"/assets/conversor/ArrowUp.svg"}
            marginLeft={"3px"}
          ></CustomizedButton>

          {/* Accordion */}
          <Accordion
            sx={{
              width: "164px",
              height: "35px",
              background: "#D5D6D9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails> */}
          </Accordion>
        </Box>
      </Box>
    </>
  );
}

export default Header;
