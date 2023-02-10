import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TopProduct } from "../../redux/reducers/productReducer";

const ProductImgContainer = styled("div")(() => ({
  borderRadius: "50%",
  height: "55px",
  width: "55px",
  overflow: "hidden",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));

const ProductName = styled("h5")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "300",
  color: theme.palette.common.black,
  margin: 0,
}));

const ProductNumber = styled("span")(() => ({
  fontSize: "20px",
  fontWeight: "500",
  "& .MuiTypography-body1": {
    fontSize: "15px",
    color: "#000",
  },
}));

const TextDivider = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  height: "100%",
  "&:before": {
    content: '"|"',
  },
}));

type Props = { index: number; product: TopProduct };

export default function TopProductItem({ index, product }: Props) {
  const prodTextColor =
    index === 0
      ? "#549FDA"
      : index === 1
      ? "#92C05C"
      : index === 2
      ? "#F5C531"
      : "";

  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid item xs={2}>
        <ProductImgContainer sx={{ border: `3px solid ${prodTextColor}` }}>
          <img src={product.img} alt={product.name} style={{ width: "100%" }} />
        </ProductImgContainer>
      </Grid>
      <Grid item xs={10}>
        <ProductName>{product.name}</ProductName>
        <Grid container>
          <Grid item lg={4}>
            <ProductNumber sx={{ color: prodTextColor }}>
              {product.quantity.toLocaleString("vi")}{" "}
              <Typography component="span">sold</Typography>
            </ProductNumber>
          </Grid>
          <Grid item lg={1}>
            <TextDivider />
          </Grid>
          <Grid item lg={7}>
            <ProductNumber sx={{ color: prodTextColor }}>
              {product.earned.toLocaleString("vi")}{" "}
              <Typography component="span">earned</Typography>
            </ProductNumber>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
