import Divider from "@mui/material/Divider";
import React from "react";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {};

export default function Revenue({}: Props) {
  const { income, cost, targetRevenue } = useSelector(
    (state: RootState) => state.sales
  );

  const revenueArr = income.current.map(
    (value, index) => value - cost.current[index]
  );

  const totalRevenue = revenueArr.reduce((a, b) => a + b, 0);

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
              ? `${(targetRevenue / 1000000).toLocaleString("vi")}m`
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
            value: totalRevenue / targetRevenue,
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
      <CardText sx={{ height: "170px" }}>
        <ReactECharts option={option} />
      </CardText>
    </>
  );
}
