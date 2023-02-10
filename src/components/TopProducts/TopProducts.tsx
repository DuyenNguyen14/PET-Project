import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { TopProduct } from "../../redux/reducers/productReducer";
import { RootState } from "../../redux/store";
import { CardText, CardTitle } from "../../theme/globalStyles";
import TopProductItem from "./TopProductItem";

type Props = {};

export default function TopProducts({}: Props) {
  const { topProducts } = useSelector((state: RootState) => state.products);

  const topProductsDesc = [...topProducts].sort((a, b) => b.earned - a.earned);

  return (
    <>
      <CardTitle>Top Products</CardTitle>
      <Divider />
      <CardText>
        {topProductsDesc.map((product: TopProduct, index) => (
          <Box key={product.name} sx={{ marginTop: "20px" }}>
            <TopProductItem product={product} index={index} />
          </Box>
        ))}
      </CardText>
    </>
  );
}
