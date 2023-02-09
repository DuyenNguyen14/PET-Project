import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";

type Props = {};

export default function SalesChart({}: Props) {
  const { income, cost } = useSelector((state: RootState) => state.sales);

  const rosArray = () => {
    if (income.current.length === 7 && cost.current.length === 7) {
      return income.current.map(
        (value, index) => ((value - cost.current[index]) * 100) / value
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
        axisLabel: {
          formatter: (value: number) => value / 100000 + "m",
        },
        show: true,
        type: "value",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FF7E41",
          },
        },
      },
      {
        axisLabel: {
          formatter: (value: number) => value + "%",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#33BDEA",
          },
        },
        interval: 20,
        type: "value",
        min: 0,
        max: 100,
      },
    ],
    series: [
      {
        name: "Income",
        type: "bar",
        data: income.current,
        color: "#FF7E41",
        tooltip: {
          valueFormatter: (value: number) =>
            value.toLocaleString("vi") + " vnd",
        },
      },
      {
        name: "Cost",
        type: "bar",
        data: cost.current,
        color: "#8E96B6",
        tooltip: {
          valueFormatter: (value: number) =>
            value.toLocaleString("vi") + " vnd",
        },
      },
      {
        name: "Returns on Sales",
        type: "line",
        data: rosArray(),
        yAxisIndex: 1,
        color: "#33BDEA",
        tooltip: {
          valueFormatter: (value: number) => value.toLocaleString("vi") + " %",
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
