import { Divider } from "@mui/material";
import React from "react";
import { CardText, CardTitle } from "../../theme/globalStyles";

type Props = {};

export default function ExpiredProducts({}: Props) {
  return (
    <>
      <CardTitle>Soon to be expired products</CardTitle>
      <Divider />
      <CardText>
        
      </CardText>
    </>
  );
}
