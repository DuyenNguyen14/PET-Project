import { Divider } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";
import ReactECharts from "echarts-for-react";

type Props = { week: string };

export default function SalesChart({ week }: Props) {
  const { income, cost } = useSelector((state: RootState) => state.sales);
  const [incomeArr, setIncomeArr] = useState<number[]>([]);
  const [costArr, setCostArr] = useState<number[]>([]);
  const currentWeek = useRef("1");

  const incomeArrayLocaled =
    incomeArr.length === 7 && incomeArr.map((value) => value / 1000);

  const costArrayLocaled =
    costArr.length === 7 && costArr.map((value) => value / 1000);

  const rosArray = () => {
    if (
      incomeArr.length > 0 &&
      costArr.length > 0 &&
      incomeArr.length === costArr.length
    ) {
      return incomeArr.map((value, index) =>
        (((value - costArr[index]) * 100) / value).toFixed(2)
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

  useEffect(() => {
    if (week !== currentWeek.current) {
      currentWeek.current = week;
    }
  }, [week]);

  useEffect(() => {
    if (income.length > 0 && cost.length > 0) {
      setIncomeArr(income);
      setCostArr(cost);
    }
  }, [income.length, cost.length, currentWeek.current]);

  return (
    <>
      <CardTitle>Income & Cost in 7 days</CardTitle>
      <Divider />
      <CardText>
        {incomeArr.length === 7 && costArr.length === 7 && (
          <ReactECharts option={option} />
        )}
      </CardText>
    </>
  );
}
