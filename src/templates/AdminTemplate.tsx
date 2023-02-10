import {
  Box,
  Breadcrumbs,
  CssBaseline,
  Link,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SideNav from "../components/SideNav";
import WeekFilter from "../components/WeekFilter";
import Dashboard from "../pages/Dashboard";

const ContentHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

type Props = {};

export default function AdminTemplate({}: Props) {
  const [week, setWeek] = useState("1");

  const handleChange = (e: SelectChangeEvent) => {
    setWeek(e.target.value as string);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ContentHeader />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="GrayText" href="#">
              Main
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Dashboard
            </Link>
          </Breadcrumbs>
          <WeekFilter week={week} handleChange={handleChange} />
        </Box>
        <Dashboard week={week} />
      </Box>
    </Box>
  );
}
