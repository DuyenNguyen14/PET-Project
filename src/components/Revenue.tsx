import Divider from "@mui/material/Divider";
import React from "react";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardContent, useMediaQuery } from "@mui/material";
import CardTitle from "./CardTitle";

type Props = {};

export default function Revenue({}: Props) {
  const { revenue } = useSelector((state: RootState) => state.sales);
  const isMinWidth = useMediaQuery("(min-width: 1199px)");

  const totalRevenue = revenue.values.reduce((a, b) => a + b, 0);

  const option = {
    series: [
      {
        min: 0,
        max: 1,
        center: ["50%", "40%"],
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        itemStyle: {
          color: "#E08DB4",
        },
        radius: "80%",
        axisLine: {
          lineStyle: {
            color: [[1, "#D9D9D9"]],
            width: 30,
            interval: 100000,
          },
        },
        progress: {
          show: true,
          width: 30,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          length: 14,
          distance: -65,
          formatter: (value: number) =>
            value === 1
              ? `${(revenue.targetRevenue / 1000000).toLocaleString("vi")}m`
              : "",
          color: "#676E8A",
        },
        detail: {
          valueAnimation: true,
          fontSize: 14,
          offsetCenter: [0, "-10%"],
          formatter: (value: number) => (value * 100).toFixed(2) + " %",
          color: "#676E8A",
          fontWeight: 600,
        },
        data: [
          {
            name: totalRevenue.toLocaleString("vi") + " vnd",
            value: totalRevenue / revenue.targetRevenue,
          },
        ],
        title: {
          offsetCenter: [0, "-30%"],
          color: "#E08DB4",
          fontWeight: 700,
          fontSize: "16px",
        },
        pointer: {
          show: false,
        },
      },
    ],
  };

  return (
    <>
      <CardTitle>Revenue</CardTitle>
      <Divider />
      <CardContent
        sx={
          isMinWidth
            ? { height: "170px" }
            : { height: "336px", padding: "80px" }
        }
      >
        <ReactECharts option={option} />
      </CardContent>
    </>
  );
}
