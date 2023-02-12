import { Box, Grid } from "@mui/material";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SoonToExpireProducts } from "../../redux/reducers/productReducer";
import ExpiredProductsTable from "./ExpiredProductsTable";

type Props = { categoryName: string };

export default function ExpiredProducts({ categoryName }: Props) {
  const { soonToExpireProducts } = useSelector(
    (state: RootState) => state.products
  );

  const arrProducts =
    soonToExpireProducts.length > 0 &&
    soonToExpireProducts.find((item) => item.category === categoryName);

  const { products } = arrProducts as SoonToExpireProducts;

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      value: "category",
      data: products?.map((prod) => prod.name),
      axisLabel: {
        interval: 0,
        rotate: -20,
        formatter: (name: string) =>
          name.length > 20 ? name.slice(0, 20) + "..." : name,
      },
    },
    yAxis: {
      type: "value",
    },
    grid: {
      top: 50,
      bottom: 80,
      left: 40,
    },
    series: [
      {
        data: products?.map((prod) => prod.quantity).sort((a, b) => b - a),
        type: "bar",
        itemStyle: {
          color: "#F46180",
        },
      },
    ],
  };

  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid item lg={7}>
        <ReactECharts option={option} style={{ height: "100%" }} />
      </Grid>
      <Grid item lg={5}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ExpiredProductsTable rows={products} />
        </Box>
      </Grid>
    </Grid>
  );
}
