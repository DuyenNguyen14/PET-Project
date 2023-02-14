import { Box, CardContent } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { TopProduct } from "../../redux/reducers/productReducer";
import { RootState } from "../../redux/store";
import CardTitle from "../CardTitle";
import TopProductItem from "./TopProductItem";

type Props = {};

export default function TopProducts({}: Props) {
  const { topProducts } = useSelector((state: RootState) => state.products);

  return (
    <>
      <CardTitle>Top Products</CardTitle>
      <Divider />
      <CardContent>
        {topProducts.map((product: TopProduct, index) => (
          <Box key={product.name} sx={{ marginTop: "20px" }}>
            <TopProductItem product={product} index={index} />
          </Box>
        ))}
      </CardContent>
    </>
  );
}
