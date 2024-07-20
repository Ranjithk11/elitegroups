"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";

const StyledTabsList = styled(Tabs)(({ theme }) => ({
  minHeight: 62,
  "& .MuiTabs-indicator": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const StyledTab = styled(Tab)<{ ref?: React.Ref<HTMLDivElement> }>(
  ({ theme }) => ({
    minHeight: 62,
    fontWeight: 500,
    fontSize: 16,
    color: theme.palette.common.white,
  })
);

const AppBarComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden only={["lg", "xl", "md"]}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            variant="h1"
            component="div"
            sx={(theme) => ({ flexGrow: 1, color: theme.palette.common.white })}
          >
            Elite
          </Typography>
          <Box pl={2}>
            <StyledTabsList
              variant="scrollable"
              value={tabIndex}
              onChange={(_, value) => setTabIndex(value)}
            >
              <StyledTab value="0" label="Home" />
              <StyledTab value="1" label="About" />
              <StyledTab value="2" label="Customs" />
              <StyledTab value="3" label="Industrial Subsidies" />
              <StyledTab value="4" label="Taxation" />
              <StyledTab value="5" label="Seceretarial" />
              <StyledTab value="6" label="Regulatory Permits" />
              <StyledTab value="7" label="HR Solutions" />
            </StyledTabsList>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
