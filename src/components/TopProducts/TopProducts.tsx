import Divider from "@mui/material/Divider";
import React from "react";
import { CardText, CardTitle } from "../../theme/globalStyles";
import TopProductItem from "./TopProductItem";

type Props = {};

export default function TopProducts({}: Props) {
  return (
    <>
      <CardTitle>Top Products</CardTitle>
      <Divider />
      <CardText>
        <TopProductItem />
      </CardText>
    </>
  );
}
