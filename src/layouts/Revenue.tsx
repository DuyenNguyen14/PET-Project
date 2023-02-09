import Divider from "@mui/material/Divider";
import React from "react";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";

type Props = {};

export default function Revenue({}: Props) {
  const option = {
    series: [
      {
        center: ["50%", "40%"],
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        radius: "80%",
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
