import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";

type Props = {};

export default function SalesChart({}: Props) {
  const { income, cost } = useSelector((state: RootState) => state.sales);

  const incomeArrayLocaled =
    income.current.length === 7 && income.current.map((value) => value / 1000);

  const costArrayLocaled =
    cost.current.length === 7 && cost.current.map((value) => value / 1000);

  const rosArray = () => {
    if (income.current.length === 7 && cost.current.length === 7) {
      return income.current.map((value, index) =>
        (((value - cost.current[index]) * 100) / value).toFixed(2)
      );
    }
  };

  const option = {
    legend: {
      data: ["Income", "Cost", "Returns on Sales"],
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisPointer: {
        type: "shadow",
      },
    },
    yAxis: [
      {
        show: true,
        type: "value",
        name: "Value (1.000 vnd)",
        interval: 100000,
        min: 0,
        max: 500000,
        splitLine: {
          show: false,
        },
      },
      {
        interval: 20,
        type: "value",
        name: "%",
        min: 0,
        max: 100,
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Income",
        type: "bar",
        data: incomeArrayLocaled,
        color: "#FF7E41",
      },
      {
        name: "Cost",
        type: "bar",
        data: costArrayLocaled,
        color: "#8E96B6",
      },
      {
        name: "Returns on Sales",
        type: "line",
        data: rosArray(),
        yAxisIndex: 1,
        color: "#33BDEA",
        tooltip: {
          valueFormatter: (value: number) => value + " %",
        },
      },
    ],
  };

  return (
    <>
      <CardTitle>Income & Cost in 7 days</CardTitle>
      <Divider />
      <CardText>
        {income.current.length === 7 && cost.current.length === 7 && (
          <ReactECharts option={option} />
        )}
      </CardText>
    </>
  );
}
