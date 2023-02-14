import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";

const CardTitleStyled = styled("h3")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  margin: "16px 32px",
}));

type Props = { children: ReactNode };

export default function CardTitle({ children }: Props) {
  return <CardTitleStyled>{children}</CardTitleStyled>;
}
