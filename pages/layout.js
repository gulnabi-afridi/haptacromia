import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomLayoutLeftNavigation from "@/views/Layout/CustomLayoutLeftNavigation";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      xmd: 1300,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomLayoutLeftNavigation>{children}</CustomLayoutLeftNavigation>
      </ThemeProvider>
    </>
  );
}
