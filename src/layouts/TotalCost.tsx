import { Box, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";

type Props = { week: string };

export default function TotalCost({ week }: Props) {
  const { cost, prevCost } = useSelector((state: RootState) => state.sales);

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
        data: cost.length === 7 && cost,
        color: "#676E8A",
      },
      {
        showSymbol: false,
        type: "line",
        data: prevCost.length === 7 && prevCost,
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
      <CardText>
        <Typography
          component="span"
          sx={{ fontWeight: "700", fontSize: "18px", color: "#000" }}
        >
          {cost.length === 7 &&
            cost.reduce((a, b) => a + b, 0).toLocaleString("vi")}{" "}
        </Typography>
        <Typography component="span">vnd</Typography>
        <Box>
          <ReactECharts option={option} style={{ height: "60px" }} />
        </Box>
      </CardText>
    </>
  );
}
