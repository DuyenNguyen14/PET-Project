import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSalesStats } from "../redux/reducers/dashboardReducer";
import { RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";

type Props = { week: string };

export default function SalesChart({ week }: Props) {
  const salesStats = useSelector(
    (state: RootState) => state.dashboard.salesStats
  );

  const getSalesArray = (key: string) => {
    const array = [];
    if (salesStats.length > 0) {
      for (const stat of salesStats) {
        if (key === "ros") {
          let ros = (((stat.income - stat.cost) * 100) / stat.income).toFixed(
            2
          );
          array.push(ros);
        } else {
          let value = stat[key] / 1000;
          array.push(value);
        }
      }
      return array;
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
        name: "Value (1,000 vnd)",
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
        data: getSalesArray("income"),
        color: "#FF7E41",
      },
      {
        name: "Cost",
        type: "bar",
        data: getSalesArray("cost"),
        color: "#8E96B6",
      },
      {
        name: "Returns on Sales",
        type: "line",
        data: getSalesArray("ros"),
        yAxisIndex: 1,
        color: "#33BDEA",
        tooltip: {
          valueFormatter: (value: number) => value + " %",
        },
      },
    ],
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSalesStats(week));
  }, [week]);

  return (
    <>
      <CardTitle>Income & Cost in 7 days</CardTitle>
      <Divider />
      <CardText>
        <ReactECharts option={option} />
      </CardText>
    </>
  );
}
