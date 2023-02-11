import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  setCost,
  setIncome,
  setTargetRevenue,
} from "../redux/reducers/salesReducer";
import Revenue from "../components/Revenue";
import TotalIncome from "../components/TotalIncome";
import TotalCost from "../components/TotalCost";
import SalesChart from "../components/SalesChart";
import TopProducts from "../components/TopProducts/TopProducts";
import {
  setSoonToExpireProducts,
  setTopProducts,
} from "../redux/reducers/productReducer";
import CustomerRatings from "../components/CustomerRatings/CustomerRatings";
import { setRatings } from "../redux/reducers/ratingsReducer";
import ExpiredCategories from "../components/ExpiredProducts/ExpiredCategories";

type Props = { week: string };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: "1px solid #D9D9D9",
  borderRadius: "8px",
}));

export default function Dashboard({ week }: Props) {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setIncome(week));
    dispatch(setCost(week));
    dispatch(setTargetRevenue(week));
    dispatch(setTopProducts(week));
    dispatch(setRatings(week));
    dispatch(setSoonToExpireProducts(week));
  }, [week]);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        <Grid item lg={5}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <Item>
                <TotalIncome />
              </Item>
            </Grid>
            <Grid item lg={6}>
              <Item>
                <TotalCost />
              </Item>
            </Grid>
            <Grid item lg={12}>
              <Item>
                <Revenue />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7}>
          <Item>
            <SalesChart />
          </Item>
        </Grid>
        <Grid item lg={5}>
          <Item>
            <TopProducts />
          </Item>
        </Grid>
        <Grid item lg={7}>
          <Item>
            <CustomerRatings />
          </Item>
        </Grid>
        <Grid item lg={12}>
          <Item>
            <ExpiredCategories week={week} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
