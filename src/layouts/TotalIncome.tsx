import { Divider, Typography } from "@mui/material";
import { CardText, CardTitle } from "../theme/globalStyles";

type Props = {};

export default function TotalIncome({}: Props) {
  return (
    <>
      <CardTitle>Total Income</CardTitle>
      <Divider />
      <CardText>
        <Typography
          component="span"
          sx={{ fontWeight: "700", fontSize: "18px", color: "#000" }}
        >
          645,000,000{" "}
        </Typography>
        <Typography component="span">vnd</Typography>
      </CardText>
    </>
  );
}
