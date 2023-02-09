import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { CardText, CardTitle } from "../theme/globalStyles";

type Props = { week: string };

let timeout: ReturnType<typeof setTimeout>;

export default function TotalIncome({ week }: Props) {
  // const { salesValues } = useSelector((state: RootState) => state.sales);
  

  const dispatch: AppDispatch = useDispatch();


  // useEffect(() => {
  //   timeout = setTimeout(() => {
  //     console.log("get");
  //     let previousWeek = parseInt(week) - 1;
  //     dispatch(setSalesValues(previousWeek.toString()));
  //   }, 1000);

  // return () => {
  //   timeout !== null && clearTimeout(timeout);
  // };
  // }, []);

  return (
    <>
      <CardTitle>Total Income</CardTitle>
      <Divider />
      <CardText>
        <Typography
          component="span"
          sx={{ fontWeight: "700", fontSize: "18px", color: "#000" }}
        >
          {/* {salesValues
            .reduce((a, value) => a + value.income, 0)
            .toLocaleString("vi")}{" "} */}
        </Typography>
        <Typography component="span">vnd</Typography>
      </CardText>
    </>
  );
}
