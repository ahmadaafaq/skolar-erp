import { Container } from "@mui/material";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";

function ProductAndService() {
  return (
    <Container>
      <ProductInfo />
      <ProductList />
    </Container>
  );
}

export default ProductAndService;
