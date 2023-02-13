import { Box, Button, Divider, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { CardText, CardTitle } from "../../theme/globalStyles";
import ReactECharts from "echarts-for-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ExpiredProducts from "./ExpiredProducts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";

type EventParams = {
  // The component name clicked,
  // component type, could be 'series'、'markLine'、'markPoint'、'timeLine', etc..
  componentType: string;
  // series type, could be 'line'、'bar'、'pie', etc.. Works when componentType is 'series'.
  seriesType: string;
  // the index in option.series. Works when componentType is 'series'.
  seriesIndex: number;
  // series name, works when componentType is 'series'.
  seriesName: string;
  // name of data (categories).
  name: string;
  // the index in 'data' array.
  dataIndex: number;
  // incoming raw data item
  data: Object;
  // charts like 'sankey' and 'graph' included nodeData and edgeData as the same time.
  // dataType can be 'node' or 'edge', indicates whether the current click is on node or edge.
  // most of charts have one kind of data, the dataType is meaningless
  dataType: string;
  // incoming data value
  value: number | Array<number>;
  // color of the shape, works when componentType is 'series'.
  color: string;
};

const GoBackButton = styled(IconButton)();

type Props = {
  week: string;
};

export default function ExpiredCategories({ week }: Props) {
  const { soonToExpireProducts } = useSelector(
    (state: RootState) => state.products
  );
  const [categoryName, setCategoryName] = useState<null | string>(null);
  const [goBack, setGoBack] = useState(false);
  const currWeek = useRef("1");

  const onEvents = {
    click: (params: EventParams) => {
      setCategoryName(params.name);
      setGoBack(true);
    },
  };

  const handleGoBack = () => {
    setGoBack(false);
  };

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 45,
      right: 190,
      left: 190,
    },
    xAxis: {
      type: "category",
      data:
        soonToExpireProducts.length > 0 &&
        soonToExpireProducts.map((product) => product.category),
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
      },
    },
    series: [
      {
        data:
          soonToExpireProducts.length > 0 &&
          soonToExpireProducts
            .map((category) =>
              category.products.reduce((sum, prod) => sum + prod.quantity, 0)
            )
            .sort((a, b) => b - a),
        type: "bar",
        itemStyle: {
          color: "#F46180",
        },
      },
    ],
  };

  useEffect(() => {
    if (week !== currWeek.current) {
      currWeek.current = week;
      setCategoryName(null);
      setGoBack(false);
    }
  }, [week]);

  return (
    <>
      <CardTitle>Soon to be expired products</CardTitle>
      <Divider />
      <CardText sx={{ height: "450px" }}>
        {!goBack ? (
          <ReactECharts
            option={option}
            style={{ height: "420px" }}
            onEvents={onEvents}
          />
        ) : (
          categoryName &&
          goBack && (
            <Box>
              <GoBackButton onClick={handleGoBack} aria-label="go-back">
                <ArrowBackIosNewIcon />
              </GoBackButton>
              <ExpiredProducts categoryName={categoryName} />
            </Box>
          )
        )}
      </CardText>
    </>
  );
}
