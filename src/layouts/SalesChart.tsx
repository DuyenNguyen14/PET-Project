import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";
import { setCost, setIncome } from "../redux/reducers/salesReducer";

type Props = { week: string };

export default function SalesChart({ week }: Props) {
  const { income, cost } = useSelector((state: RootState) => state.sales);
  console.log({ income });
  console.log({ cost });

  const incomeArrayLocaled =
    income.length === 7 && income.map((value) => value / 1000);

  const costArrayLocaled =
    cost.length === 7 && cost.map((value) => value / 1000);

  const rosArray = () => {
    if (income.length > 0 && cost.length > 0 && income.length === cost.length) {
      return income.map((value, index) =>
        (((value - cost[index]) * 100) / value).toFixed(2)
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIncome(week));
    dispatch(setCost(week));
  }, [week]);

  return (
    <>
      <CardTitle>Income & Cost in 7 days</CardTitle>
      <Divider />
      <CardText>
        {income.length === 7 && cost.length === 7 && (
          <ReactECharts option={option} />
        )}
      </CardText>
    </>
  );
}
