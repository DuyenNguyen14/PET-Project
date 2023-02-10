import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductImg = styled('img')(({theme}) => ({
  borderRadius: '50%'
}));

type Props = {};

export default function TopProductItem({}: Props) {
  return <Grid container spacing={2}></Grid>;
}
