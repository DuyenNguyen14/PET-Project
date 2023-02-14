import { Box, CardContent, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ReactECharts from "echarts-for-react";
import CardTitle from "./CardTitle";

type Props = {};

export default function TotalIncome({}: Props) {
  const { income } = useSelector((state: RootState) => state.sales);

  const option = {
    xAxis: {
      value: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      show: false,
    },
    yAxis: {
      show: false,
      min: 250000000,
      max: 500000000,
    },
    series: [
      {
        showSymbol: false,
        type: "line",
        data: income.current,
        color: "#FF7E41",
      },
      {
        showSymbol: false,
        type: "line",
        data: income.previous,
        color: "#676e8a91",
        lineStyle: {
          type: "dashed",
        },
      },
    ],
  };

  return (
    <>
      <CardTitle>Total Income</CardTitle>
      <Divider />
      <CardContent>
        <Typography
          component="span"
          sx={{ fontWeight: "700", fontSize: "18px", color: "#000" }}
        >
          {income.currentTotal.toLocaleString("vi")}{" "}
        </Typography>
        <Typography component="span">vnd</Typography>
        <Box>
          <ReactECharts option={option} style={{ height: "60px" }} />
        </Box>
      </CardContent>
    </>
  );
}
