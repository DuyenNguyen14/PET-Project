import { Box, CardContent, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ReactECharts from "echarts-for-react";
import CardTitle from "./CardTitle";

type Props = {};

export default function TotalCost({}: Props) {
  const { cost } = useSelector((state: RootState) => state.sales);

  const option = {
    xAxis: {
      value: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      show: false,
    },
    yAxis: {
      show: false,
      min: 100000000,
      max: 350000000,
    },
    series: [
      {
        showSymbol: false,
        type: "line",
        data: cost.current,
        color: "#676E8A",
      },
      {
        showSymbol: false,
        type: "line",
        data: cost.previous,
        color: "#676e8a91",
        lineStyle: {
          type: "dashed",
        },
      },
    ],
  };

  return (
    <>
      <CardTitle>Total Cost</CardTitle>
      <Divider />
      <CardContent>
        <Typography
          component="span"
          sx={{ fontWeight: "700", fontSize: "18px", color: "#000" }}
        >
          {cost.currentTotal.toLocaleString("vi")}{" "}
        </Typography>
        <Typography component="span">vnd</Typography>
        <Box>
          <ReactECharts option={option} style={{ height: "60px" }} />
        </Box>
      </CardContent>
    </>
  );
}
