import {
  Box,
  Breadcrumbs,
  CssBaseline,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import TotalIncome from "../layouts/TotalIncome";
import SalesStats from "../layouts/SalesChart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setCost, setIncome } from "../redux/reducers/salesReducer";
import TotalCost from "../layouts/TotalCost";
import Revenue from "../layouts/Revenue";

type Props = {};

const ContentHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: "16px 32px",
  color: theme.palette.text.secondary,
  border: "1px solid #D9D9D9",
  borderRadius: "8px",
}));

export default function Dashboard({}: Props) {
  const [week, setWeek] = useState("1");

  const handleChange = (e: SelectChangeEvent) => {
    setWeek(e.target.value as string);
  };

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setIncome(week));
    dispatch(setCost(week));
  }, [week]);

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
            marginBottom: "22px",
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography component="p">Data shown by:</Typography>
            </Box>
            <Box sx={{ minWidth: 120, marginLeft: "5px" }}>
              <FormControl size="small" fullWidth>
                <Select value={week} onChange={handleChange}>
                  <MenuItem value={1}>This week</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Item>
                  <TotalIncome />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <TotalCost />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Revenue />
                </Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <SalesStats />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
