import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardTitle = styled("h3")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  margin: "16px 32px",
}));

export const CardText = styled(CardContent)(({ theme }) => ({
  padding: "16px 32px",
}));
