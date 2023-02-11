import { Box, Grid } from "@mui/material";
import React from "react";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  SoonToExpireProduct,
  SoonToExpireProducts,
} from "../../redux/reducers/productReducer";

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
    tooltip: {},
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
        data: products?.map((prod) => prod.quantity),
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
      <Grid item lg={5}></Grid>
    </Grid>
  );
}
