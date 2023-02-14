import { CardContent, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ReactECharts from "echarts-for-react";
import CardTitle from "../CardTitle";

const colorPalette = ["#5DAAE8", "#A6CA7C", "#FFDD75", "#F46180"];

type Props = {};

export default function CustomerRatings({}: Props) {
  const { ratings } = useSelector((state: RootState) => state.ratings);

  const option = {
    tooltip: {
      trigger: "item",
      valueFormatter: (value: number) => value + "%",
    },
    legend: {
      top: "center",
      right: "15%",
      orient: "vertical",
    },
    series: [
      {
        color: colorPalette,
        name: "Customers Ratings",
        type: "pie",
        radius: ["60%", "80%"],
        right: 150,
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: ratings.excellent, name: "Excellent" },
          { value: ratings.good, name: "Good" },
          { value: ratings.notBad, name: "Not bad" },
          { value: ratings.bad, name: "Bad" },
        ],
      },
    ],
  };

  return (
    <>
      <CardTitle>Customers Ratings</CardTitle>
      <Divider />
      <CardContent sx={{ height: "415px" }}>
        <ReactECharts option={option} style={{ height: "380px" }} />
      </CardContent>
    </>
  );
}
